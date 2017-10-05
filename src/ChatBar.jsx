
import React, { Component } from 'react';

class ChatBar extends Component {

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username"
          defaultValue={this.props.currentUser.name}
          onBlur={this.handleChange}
        />
        <input
          className="chatbar-message"
          placeholder={this.props.content}
          onKeyPress={this.handleKeyPress}
          placeholder= "Type a message and hit Enter."          
        />
      </footer>
    );

  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.sendMessage(event.target.value);
      event.target.value = '';
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    if (event.target.value.length > 0){
    this.props.changeUser(event.target.value);
    }
  }

}
export default ChatBar;