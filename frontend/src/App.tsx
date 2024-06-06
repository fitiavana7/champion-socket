import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import './App.css';
import List from './components/List';
import Message from './components/Mesage';
import UploadFile from './components/UploadFile';

function App() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<{ id: string; message: string }[]>([]);

  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = ({ id, message }: { id: string; message: string }) => {
    setMessages(prevMessages => [...prevMessages, { id, message }]);
  };

  useEffect(() => {
    socket?.on('recMessage', messageListener);
    return () => {
      socket?.off('recMmessage', messageListener);
    };
  }, [socket]);

  function supprimer(id:string){
    socket?.emit('supprimer' , id)
  }

  function envoyer({ id, message }: { id: string; message: string }) {
    socket?.emit('sendMessage', { id, message });
  }

  return (
    <div className="App">
      <UploadFile/>
      <Message send={envoyer}  />
      <List messages={messages} supprimer={supprimer} />
    </div>
  );
}

export default App;