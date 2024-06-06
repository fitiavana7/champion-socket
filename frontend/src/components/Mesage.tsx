import React, { useState } from 'react';

const Message = ({send} : any ) => {
    let [mess , setMess] = useState<string>("")
    let [id , setId] = useState<string>("")
    let [containId , setContainId] = useState(false)

    function handleChange(e : any) : void{
        e.target.id == 'nom' ? setId(e.target.value) : setMess(e.target.value)
    }

    function submitId(e : any){
        e.preventDefault()
        setContainId(!containId)
    }

    function submit(e : any){
        e.preventDefault()
        send({id , message :mess})
        setMess("")
    }

    return containId ? 
            <form onSubmit={submitId}>
                <input type="text" required onChange={handleChange} placeholder='Vôtre nom' value={id} id="nom" />
                <button type="submit">OK</button>
             </form>
             : 
            <form onSubmit={submit}>
                <input type="text" required onChange={handleChange} placeholder='vôtre message' value={mess} id="message" />
                <button type="submit">SEND</button>
                <button onClick={()=>{
                    setId("")
                    setContainId(!containId)
                }}>LOGOUT</button>
            </form> ;
};

export default Message;