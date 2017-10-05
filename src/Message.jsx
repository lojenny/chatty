
import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="message" id={this.props.id}>
          <span className="message-username" style={{color: this.props.color}} >
            {this.props.username}
          </span>
          <span className="message-content">
            {this.props.content}
          </span>
        </div>
      </div>
    );
  }
}
export default Message;