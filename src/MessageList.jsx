
import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    return (
      <main className="messages">
        {this.props.messages.map(message => {
          return <Message
            content={message.content}
            username={message.username}
            key={message.id}
            id={message.id}
          />
        }
        )}
      </main>
    );
  }
}
export default MessageList;