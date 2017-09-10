import React, {Component} from 'react';
import logo from './assets/washparkacug.png'
import './assets/App.css'
import pregnant from './assets/pregnant.webp'

class Admin extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <img id="logo" src={logo}></img>
          <div className="inputField">
            <p className="login">Login:</p>
            <input className="username" placeholder="username" />
            <input className="password" placeholder="password" />
          </div>
        </div>
        <img className="background" src={pregnant}></img>
      </div>
    )
  }
}

export default Admin
