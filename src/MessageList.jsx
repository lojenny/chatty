
import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
    render() {        
        const messages = this.props.messages.map(message => {
            return <Message
                content={message.content}
                username={message.username}
                key={message.id}
            />
        });
        return (
            <main className="messages">
                {messages}
            </main>
        );
    }
}
export default MessageList;