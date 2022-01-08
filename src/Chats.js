import React from 'react'
import './Chats.css'
import Chat from './Chat.js'

function Chats() {
    return (
        <div className='chats'>
            <Chat 
                name="Ellen"
                message="Hey! how r u??"
                timestamp="2 minutes ago"
                //profilePic=""
            />
            <Chat 
                name="Natasha"
                message="What's up??"
                timestamp="1 days ago"
                //profilePic=""
            />
            <Chat 
                name="Sandra"
                message="Oops"
                timestamp="3 days ago"
                //profilePic=""
            />
            <Chat 
                name="Anamika"
                message="Yess"
                timestamp="5 days ago"
                //profilePic=""
            />
        </div>
    )
}

export default Chats