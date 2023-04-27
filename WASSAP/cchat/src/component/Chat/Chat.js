
// import React, { useEffect, useState } from 'react'
// import { user } from "../Join/Join";
// import socketIo from "socket.io-client";
// import "./Chat.css";

// import Message from "../Message/Message";
// import ReactScrollToBottom from "react-scroll-to-bottom";

// let socket;


// const ENDPOINT = 'http://localhost:4500/';


// const Chat = () => {

//     const [id, setid] = useState("");
//     const [messages, setMessages] = useState([])

//     const send = () => {
//         const message = document.getElementById('chatInput').value;
//         socket.emit('message', { message, id });
//         document.getElementById('chatInput').value = "";
//     }

//     console.log(messages);
//     useEffect(() => {
//         socket = socketIo(ENDPOINT, { transports: ['websocket'] });

//         socket.on('connect', () => {
//             alert('Connected');
//             setid(socket.id);

//         })
//         console.log(socket);
//         socket.emit('joined', { user })

//         socket.on('welcome', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('userJoined', (data) => {
//             setMessages( [...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('leave', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message)
//         })

//         return () => {
           
//             socket.off();
//         }
//     }, [messages])

//     useEffect(() => {
//         socket.on('sendMessage', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message, data.id);
//         })
//         return () => {
//             socket.off();
//         }
//     }, [messages])

//     return (
//         <div className="chatPage">
//             <div className="chatContainer">
//                 <div className="header">
//                     <h2>C CHAT</h2>
                   
//                 </div>
//                 <ReactScrollToBottom className="chatBox">
//                     {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
//                 </ReactScrollToBottom>
//                 <div className="inputBox">
//                     <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
//                      <button onClick={send} className="sendBtn"></button>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Chat
import React, { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';
import './Chat.css';
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';

let socket;

const ENDPOINT = "http://localhost:4500/";

const Chat = ({ user }) => {
  const [id, setid] = useState('');
  const [messages, setMessages] = useState([]);
  const [socketEvents, setSocketEvents] = useState([]);

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', { message, id });
    document.getElementById('chatInput').value = '';
  }

  useEffect(() => {
    const socket = socketIo(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      alert('Connected');
      setid(socket.id);
    });

    socket.emit('joined', { user });

    socket.on('welcome', (data) => {
      setSocketEvents((prevEvents) => [...prevEvents, data]);
      console.log(data.user, data.message);
    });

    socket.on('userJoined', (data) => {
      setSocketEvents((prevEvents) => [...prevEvents, data]);
      console.log(data.user, data.message);
    });

    socket.on('leave', (data) => {
      setSocketEvents((prevEvents) => [...prevEvents, data]);
      console.log(data.user, data.message);
    });

    socket.on('sendMessage', (data) => {
      setSocketEvents((prevEvents) => [...prevEvents, data]);
      console.log(data.user, data.message, data.id);
    });

    return () => {
        socket.disconnect();
      socket.off();
    };
  }, [user]);

  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages, ...socketEvents]);
  }, [socketEvents]);

  

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>C CHAT</h2>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? '' : item.user}
              message={item.message}
              classs={item.id === id? 'right' : 'left'}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input
            onKeyPress={(event) => (event.key === 'Enter' ? send() : null)}
            type="text"
            id="chatInput"
          
          />
          <button onClick={send} className="sendBtn"></button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
