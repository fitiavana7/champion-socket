import React from 'react';

interface ListProps {
    messages: { id: string; message: string }[];
    supprimer : (id :string)=> void;
}
  
const List = ({ messages , supprimer }: ListProps) => {
    return (
        <div className='chat'>
            { messages.map((el,index)=>
                <div key={index} className='chat-box'>
                    <span>{el.id}</span> : {el.message}
                    <button onClick={()=>supprimer(el.id)}>X</button>
                </div>
            )}
        </div>
    );
};

export default List;