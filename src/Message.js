import React from 'react'
import './Message.css'

 function Message( {message="...", messages=["..."]}) {

   

    console.log("messages = " + messages);

    
    
    return(
    <ul className="Messages-list">
        {messages.map((m,i) => {
    const messageFromMe = i%2 === 0;
    const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
    const backgorundPic = messageFromMe ? 'red' : 'cornflowerblue'

    return (
     <li className={className}>
    <span
      className="avatar"
      style={{backgroundColor: backgorundPic}}
    />
    <div className="Message-content">
      <div className="username">
          Achref
      </div>
      <div className="text">{message}</div>
    </div>
  </li>
      );
        })}
      </ul>);
    
    
    }
    



 export default Message;