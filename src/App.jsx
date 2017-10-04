import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

import postsData from './database.json';
import userData from './user.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allmessages: [],
      users: userData,
      value: ''
    };
  }

  // getNewId() {
  //   return this.nextId++;
  // }
  changeUser = (content) => {
    this.setState({
      users: {name: content} 
    })
  }

  sendMessage = (content) => {
    const newMessage = {
      username: this.state.users.name,
      content
    }
    // const all = this.state.allmessages
    // all.push(newMessage)
    // this.setState({ allmessages: all});
    this.socket.send(JSON.stringify(newMessage));

  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    console.log("Connected to server");

    const appContent = this;
    
    this.socket.onmessage = function (event) {
      const newMessage = JSON.parse(event.data);
      console.log(newMessage);
      appContent.setState({
        allmessages: [...appContent.state.allmessages, newMessage]
      })
    }
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   const newMessage = { id: 4, username: "Michelle", content: "Hello there!" };
    //   const messages = this.state.allmessages.concat(newMessage);
    //   this.setState({ allmessages: messages} )
    // }, 3000);
  }


  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.allmessages} />
        <ChatBar 
        currentUser={this.state.users}
        sendMessage={this.sendMessage}
        changeUser={this.changeUser}
        />
      </div>
    );
  }
}
export default App;
