import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const colorList= ['#9BC300', '#30088B', '#CBAE00', '#8D007C'];

function randomizeUserColor(){
  const randomIndex = Math.floor(Math.random()*(colorList.length-1));
  return colorList[randomIndex];
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allmessages: [],
      users: {name: 'Anonymous', color: 'black'},
      value: '',
      numberConnected: 0
    };
  }


  changeUser = (content) => {
    const userA = this.state.users.name;
    this.setState({
      users: { name: content, color: randomizeUserColor()}
    });
    console.log(this.state.users.color)
    const newUserName = {
      type: 'postNotification',
      username: this.state.users.name,
      content: `Notification: ${userA} has changed to ${content}`
    }
    this.socket.send(JSON.stringify(newUserName));
  }


  sendMessage = (content) => {
    const newMessage = {
      type: 'postMessage',
      username: this.state.users.name,
      content,
      color: this.state.users.color
    }
    this.socket.send(JSON.stringify(newMessage));

  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    console.log("Connected to server");

    const username = this.state.users.name;

    const appContent = this;
    this.socket.onmessage = function (event) {
      const newMessage = JSON.parse(event.data);
      switch (newMessage.type) {
        case ('incomingNotification'):
          appContent.setState({
            allmessages: [...appContent.state.allmessages, newMessage]
          })
          break;
        case ('incomingMessage'):
          appContent.setState({
            allmessages: [...appContent.state.allmessages, newMessage]
          })
          break;
          case ('incomingNewConnection'):
          appContent.setState({
            allmessages: [...appContent.state.allmessages, newMessage],
            numberConnected: newMessage.numberConnection
          })
          console.log(appContent.state.numberConnected)
          break;
        default:
          throw new Error('unknown event type' + newMessage.type)
      }
      // const newMessage = JSON.parse(event.data);
      // console.log(newMessage);
      // appContent.setState({
      //   allmessages: [...appContent.state.allmessages, newMessage]
      // })
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
        <NavBar 
          numberConnected={this.state.numberConnected}
        />
        <MessageList
          messages={this.state.allmessages}
        />
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
