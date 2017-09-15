import React, {Component} from 'react';
import logo from '../assets/wplogo.png'
import '../assets/App.css'


class Header extends Component {
  render() {
    return (
        <div className="navbar">
          <img alt="Logo" id="logo" src={logo}></img>
        </div>
    )
  }
}

export default Header
