import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { io, Socket } from 'socket.io-client';
import { BACKEND_URL } from '../data';
import './style.css'
const Home = () => {
    
    const [username , setUsername] = useState<string>('')
    const [type , setType] = useState<string>('host')
    const navigate = useNavigate()

    const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    setSocket(newSocket);
  }, [setSocket]);

    useEffect(()=>{
        const id = localStorage.getItem('user-id')
        if(id){
            axios.get(`${BACKEND_URL}/user/${id}`)
            .then((e:any)=>{
                const link = e.data.type == 'host' ?  '/host' : '/question'
                navigate(link , {replace : true})
            })
            .catch((e:any)=>{})    
        }
        return ()=>{
            socket?.off('reponse-valid')
        }
    },[])

    function handleSubmit(e:any) {
        e.preventDefault()
        const hasUsernameError = username?.length < 3 || username?.length > 10
        if (hasUsernameError) {
            message.error('username invalide (4-10 caractères)')
        }
        if (!hasUsernameError) {
            message.success('compte créé!')
            const user = {username , type}
            console.log(user);
            socket?.emit('create' , user)
            socket?.on(`reponse-valid-${username}`,(data)=>{
                if(!data){
                    message.error('username dejà utilisé')
                }else{
                    localStorage.setItem('user-id' , data.id)
                    navigate('/host', {replace : true})    
                }
                
            })
        }
    }

    return (
    <div className="container">
        <h1>Champions</h1>
        <form method='post' onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="text" onChange={(e:any)=>setUsername(e.target.value)} value={username} name="username" id="username" placeholder="Entrez votre pseudo" required />
        </div>
        <div className="form-group">
            <label className="radio-label">
                <input type="radio" name="choix" onChange={()=>setType('host')} checked value="creer" />
                Créer
            </label>
            <label className="radio-label">
                <input type="radio" name="choix" onChange={()=>setType('guest')} value="rejoindre" />
                Rejoindre
            </label>
        </div>
        <button type="submit">Jouer</button>
        </form>
    </div>       
    );
};

export default Home;