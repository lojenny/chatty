
import React, { Component } from 'react';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="message-system">
          {this.props.content}
      </div>
    );
  }
}
export default Notification;