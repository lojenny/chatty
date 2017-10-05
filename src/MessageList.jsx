
import React, { Component } from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends React.Component {
  render() {
    return (
      <main className="messages">
        {this.props.messages.map(message => {
          switch (message.type) {
            case ('incomingNotification'):
              return <Notification
                content={message.content}
                key={message.id}
              />
              break;
            case ('incomingNewConnection'):
              return <Notification
                content={message.content}
                key={message.id}
              />
              break;
            case ('incomingMessage'):
              return <Message
                content={message.content}
                username={message.username}
                key={message.id}
                id={message.id}
                color= {message.color}
              />
              break;
            default:
              throw new Error('unknown event type' + newMessage.type)
          }


        }
        )}
      </main>
    );
  }
}
export default MessageList;