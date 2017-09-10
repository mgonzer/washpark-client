import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      uname: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

handleInput(event){
  this.setState({
    [event.target.id]:event.target.value
  })
  this.props.changeName(this.state.uname)
}

  render(){
    return (
      <div  className="loginTitle">
        <h3 id="login">Please Login</h3>
        <form className="registrationForm">
          <label className="formFont" for="uname">User Name</label>
          <input onChange={this.handleInput} type="text" id="uname" className="registration" value={this.state.uname}></input>
          <label className="formFont" for="password">Password</label>
          <input onChange={this.handleInput} type="password" id="password" className="registration" value={this.state.password}></input>
          <Link to='/User'><input type="submit" className="submitButton"/></Link>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
