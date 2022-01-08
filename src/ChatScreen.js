import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from '@mui/material/Avatar';


function ChatScreen() {
    const [input, setInput] = useState('');        // gonna keep track what r we writing in input field
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            // image: ,
            message: "How u doin?"
        },
        {
            name: "Ellen",
            // image: ,
            message: "i'm doing fine"
        },
        {
            message: "Yes doing great",
        },
    ]);

    const handleSend = e => {       // e means it is taking an event
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('yepp');
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>You matched with Ellen on 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className='chatScreen_message'>
                    <Avatar className='chatScreen_image' src={message.image} alt={message.name}/>
                    {/* <h3>{message.name}</h3> */}
                    <p className='chatScreen_text'>{message.message}</p>
                </div>
                ):(
                    <div className='chatScreen_message'>
                    <p className='chatScreen_textUser'>{message.message}</p>
                    </div>
                )
            
            ))}
            <form className='chatScreen_input'>
                <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='inputField'
                        placeholder='Type a message....'
                        type="text"
                />
                <button onClick={handleSend} type='submit' className='inputButton'>SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen
