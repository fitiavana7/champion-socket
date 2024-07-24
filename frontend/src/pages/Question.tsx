import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { BACKEND_URL } from '../data';
import { QuestionType, UserType } from '../types';
import './question.css'

const Question = () => {

    const navigate = useNavigate()
    const [userConnected,setUserConnected] = useState<UserType>()
    useEffect(()=>{
        const id = localStorage.getItem('user-id')
        if(!id){
            navigate('/' , {replace:true})
        }
        axios.get(`${BACKEND_URL}/user/${id}`)
        .then((e:any)=>{
            setUserConnected(e.data)
        })
        .catch((e:any)=>{
            navigate('/',{replace:true})
        })
    },[])

    const [hasResponded, setHasResponded] = useState<boolean>(false);
    const [socket, setSocket] = useState<Socket>();
    const [users, setUsers] = useState<UserType[]>([]);
    const [question,setQuestion] = useState<QuestionType>()
  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (data : UserType[]) => {
    setUsers(data);
    console.log(users);
  };

  useEffect(() => {
    socket?.emit('get-users')
    socket?.emit('get-question')
    socket?.on('question', (e:any)=>{                
        setQuestion(e.question)
    }); 
    socket?.on('reponse-question', (e:any)=>{ 
        if(e.valid){
            setHasResponded(false)
        }       
    });            
    socket?.on('users', messageListener);
    return () => {
      socket?.off('users');
      socket?.off('question')
      socket?.off('reponse-question')
    };
  }, [socket]);

  function repondre(q_id : number , r_id : number) {
    if (userConnected) {
        socket?.emit('repondre',{score : 5 , user_id : userConnected.id , question_id : q_id , reponse_id : r_id})
        setHasResponded(true)
    }
  }
    
    return (
        <div className='mon-div'>
            <ul className="score-list">
            {
               users.length > 0 && users.map((e:UserType , index)=>
                <li className="score-item" key={index}>
                    <span className="player-name">{e.username}</span>
                    <span className="player-score">{e.score}</span>
                </li>                
                )
            }
            </ul>
            <div>
            <div className="navbar">
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl" href="#">{userConnected?.id}{userConnected?.username}</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
                            </svg>
                            <span className="badge"></span>
                        </div>
                    </button>
                </div>
            </div>

        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{question?.question}</h2>
            </div>
        </div>

        {
            !hasResponded &&
            <div className="cards-container">
                {
                    question?.lists.map((e:{id :number , text : string},index)=>
                    <button onClick={()=>repondre(question.id , e.id)} key={index} className="mon-btn">
                        <h2>{e.text}</h2>
                    </button>  
                    )
                }
        </div>
        }
            </div>      
        </div>
    );
};

export default Question;