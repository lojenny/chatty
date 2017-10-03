
import React, { Component } from 'react';

class ChatBar extends Component {

        render() {
            return (
                <footer className="chatbar">
                    <input className="chatbar-username"
                        defaultValue={this.props.currentUser.name}
                    />
                    <input
                        className="chatbar-message"
                        placeholder={this.props.content}
                        onKeyPress={this.handleKeyPress}
                    />
                </footer>
            );
            
        }

        handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.props.sendMessage(event.target.value);
                event.target.value= '';
            }
        }
    }
    export default ChatBar;