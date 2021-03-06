import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty: the chatter box ☎️</a>
        <p>{this.props.numberConnected} Users Connected</p>
      </nav>
    );
  }
}
export default NavBar;
