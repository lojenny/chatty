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
      allmessages: postsData,
      users: userData
    };
  }

  sendMessage = (message) => {
    console.log(`${message}`)
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      const messages = this.state.allmessages.messages.concat(newMessage)
      this.setState({ allmessages: {messages : messages} })
    }, 3000);
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.allmessages.messages} />
        <ChatBar currentUser={this.state.users.currentUser} sendMessage = {this.sendMessage}/>
      </div>
    );
  }
}
export default App;
