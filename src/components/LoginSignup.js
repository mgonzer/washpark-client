import React, {Component} from 'react';
import '../assets/App.css'
import Login from './Login'
import Register from './Register'


class LoginSignup extends Component {
  constructor(props){
    super(props)
    this.state = {
      loginActive: true,
      registerActive: false,
      buttonText: 'Or Signup Here'
    }
    this.switchComponents = this.switchComponents.bind(this)
  }

  switchComponents (){
    if(this.state.loginActive){
      this.setState({
        loginActive: false,
        registerActive: true,
        buttonText: "Or Login Here"
      })
    }else{
      this.setState({
        loginActive: true,
        registerActive: false,
        buttonText: "Or Signup Here"
      })
    }
  }

  render() {
    let loginActive = '';
    if(this.state.loginActive){
      loginActive = (
        <Login changeName={this.props.changeName}/>
      );
    }
    let registerActive = '';
    if(this.state.registerActive){
      registerActive = (
        <Register />
      )
    }

    return (
      <div className="loginTitle">
        { loginActive }
        { registerActive }
        <button className="toggleButton" onClick={this.switchComponents}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default LoginSignup
