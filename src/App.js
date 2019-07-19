import React from 'react';
import './App.css';
import './Message';
import Message from './Message';

class App extends React.Component {
  state= {
    message : "",
    messages : [],
    username1 : "",
    username2 : "",
  }

  getMessage = (e) => {
    this.setState({
      message : e.target.value
    })
  }

  getUsername1 = (e) => {
    this.setState({
      username1 : e.target.value
    })
  }

  getUsername2 = (e) => {

    this.setState({
      username2 : e.target.value
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ' + this.state.message)
      this.setState({
        messages : this.state.messages.concat(this.state.message)
      })
      this.setState({
        message : ""
      })
    }
  }
  render(){
  return (
    <div className="App">
            <h1>Chat Demo App with ReactJS</h1>
            <input className="username" value={this.state.username1} placeholder="Username 1" onChange={this.getUsername1} ></input>
            <input className="username"  value={this.state.username2} placeholder="Username 2" onChange={this.getUsername2}  ></input><br/>
            <div className="content">
            <Message message={this.state.message} messages={this.state.messages} username1={this.state.username1} username2={this.state.username2}/>
            </div>
            <input className="message" value={this.state.message} placeholder="Put your message here ..." onKeyPress={this.handleKeyPress} onChange={this.getMessage} ></input>

    </div>

   
  );
  }
  
}

export default App;
