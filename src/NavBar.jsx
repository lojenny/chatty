import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p>{this.props.numberConnected} Users Connected</p>
      </nav>
    );
  }
}
export default NavBar;
