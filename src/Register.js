import React, { Component } from 'react'

class Register extends Component {
  render(){
    return (
      <div className="loginTitle">
        <h3 id="login">Please Complete Registration Form</h3>
        <form className="registrationForm">
          <label className="formFont" for="fname">First Name</label>
          <input type="text" id="fname" className="registration"></input>
          <label className="formFont"for="uname">User Name</label>
          <input type="text" id="uname" className="registration"></input>
          <label className="formFont" for="password">Password</label>
          <input type="text" id="password" className="registration"></input>
          <label className="formFont" for="repassword">Re-enter password</label>
          <input type="text" id="repassword" className="registration"></input>
          <label className="formFont" for="pin">PIN</label>
          <input type="text" id="pin" className="registration"></input>
          <input type="submit" className="submitButton"/>
        </form>
      </div>
    )
  }
}

export default Register
