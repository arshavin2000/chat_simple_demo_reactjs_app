import React from 'react'
import './Message.css'

 function Message( {message="...", messages=["..."], username1="" , username2=""}) {

   

    console.log("messages = " + messages);

    
    
    return(
    <ul className="Messages-list">
        {messages.map((m,i) => {
    const messageFromMe = i%2 !== 0;
    const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
    const backgorundPic = messageFromMe ? 'red' : 'cornflowerblue';
    const username = messageFromMe ? username2 : username1;

    return (
     <li className={className}>
    <span
      className="avatar"
      style={{backgroundColor: backgorundPic}}
    />
    <div className="Message-content">
      <div className="username">
          {username}
      </div>
      <div className="text">{m}</div>
    </div>
  </li>
      );
        })}
         
    {message !== "" ? 
    <div className="Message-content">
      <div className="username">
          Someone is writing
      </div>
      <div className="text">{message}</div>
    </div> : 
    <div className="Message-content">
      <div className="username">
          Someone is writing
      </div>
      <div className="text">...</div>
    </div> }
      </ul>);
    
    
    }
    



 export default Message;