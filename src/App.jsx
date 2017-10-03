import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList  from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

import postsData from './database.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: postsData
    };
  }

  render() {
    return (
      <div>
        <NavBar />      
        <MessageList messages = {this.state.posts.messages} />
        <ChatBar currentUser = {this.state.posts.currentUser} />
      </div>
    );
  }
}
export default App;
