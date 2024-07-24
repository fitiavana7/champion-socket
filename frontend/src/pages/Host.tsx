import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../data';
import './joueur.css'
import {useNavigate} from 'react-router-dom'
import { io, Socket } from 'socket.io-client';
import { UserType } from '../types';

const Host = () => {
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

    const [socket, setSocket] = useState<Socket>();
    const [users, setUsers] = useState<UserType[]>([]);

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
    socket?.on('users', messageListener);
    socket?.on('begining', (e:any)=>{
      if(e.begining){
        navigate('/question',{replace : true})
      }
    });       
    return () => {
      socket?.off('users');
      socket?.off('begining')
    };
  }, [socket]);

  function begin(){
    if (userConnected) {
    socket?.emit('begin' , { user_id : userConnected.id})
    }
  }

  function supprimer(id:number){
    socket?.emit('delete' , {id})
    socket?.on('users', messageListener);
    return () => {
      socket?.off('users');
    };
  }

    return (
    <div className="container">
        <h1>Salon de {userConnected?.username}</h1>
        <ul className="score-list">
            {
               users.length > 0 && users.map((e:UserType , index)=>
                <li className="score-item" key={index}>
                    <span className="player-name">{e.username}</span>
                    <span className="player-score">{e.score}</span>
                    {userConnected?.type == 'host' && <button onClick={()=>supprimer(e.id)} className="delete-btn">Supprimer</button>}
                </li>                
                )
            }
            {
                users.length == 0 && 
                <span className="player-name">pas de joueurs pour le moment</span>
            }
        </ul>
        { userConnected?.type == 'host' &&
        <button onClick={begin} disabled={users.length==0}>Commencer</button>}
    </div>
    );
};

export default Host;