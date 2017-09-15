import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }




  render(){
    return (
      <div  className="loginTitle">
        <h3 id="login">Please Login</h3>
          <label className="formFont" for="uname">User Name</label>
          <input onChange={this.handleInput} type="text" id="username" className="registration" value={this.state.username}></input>
          <label className="formFont" for="password">Password</label>
          <input onChange={this.handleInput} type="password" id="password" className="registration" value={this.state.password}></input>
          
      </div>
    )
  }


export default withRouter(Login)
