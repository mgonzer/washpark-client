import React, {Component} from 'react';
import logo from './assets/washparkacug.png'
import './assets/App.css'
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
        <div className="navbar">
          <img id="logo" src={logo}></img>
        </div>
    )
  }
}

export default Header
