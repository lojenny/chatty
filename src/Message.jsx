
import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div className="message" key={this.props.id}>
                    <span className="message-username">{this.props.username}</span>
                    <span className="message-content">{this.props.content}</span>
                </div>
                <div className="message system">
                    {/* Anonymous1 changed their name to nomnom. */}
                </div>
            </div>
        );
    }
}
export default Message;