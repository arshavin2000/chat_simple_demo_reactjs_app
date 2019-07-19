import React from 'react';
import './App.css';
import './Message';
import Message from './Message';

class App extends React.Component {
  state= {
    message : "",
    messages : []
  }

  getMessage = (e) => {
    this.setState({
      message : e.target.value
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
            <h1>Chat Demo App</h1>
            <input  value={this.state.message} placeholder="Put your message here ..." onKeyPress={this.handleKeyPress} onChange={this.getMessage} ></input>
            <Message message={this.state.message} messages={this.state.messages}/>


    </div>

   
  );
  }
  
}

export default App;
