import React, {Component} from 'react';
import '../../assets/App.css'
import { withRouter } from 'react-router-dom';

class LoginSignup extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      first_name: '',
      pin: '',
      registerActive: false,
    }
    this.switchComponents = this.switchComponents.bind(this)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event){
    this.setState({
      [event.target.id]:event.target.value
    })
  }


  handleSubmit(event){
    const {username, password, first_name, pin} = this.state
    event.preventDefault()
    this.state.registerActive ? this.props.onSignup(
      {username,
        password,
        first_name,
        pin}
      ) : this.props.onLogin(
        {username,
          password}
        )
    this.props.history.push('/Dashboard')
  }

  componentDidUpdate(prevProps, prevState){
    // if(this.props.data.user.response.data.error.message == 'Un-Authorized'){
    //   console.log("NO,NO");
    // }else{
    // this.props.history.push('/Dashboard')
    // }
  }

  switchComponents (){
      this.setState({
        registerActive: this.state.registerActive ? false : true
      })

  }


  render() {


    return (
      <div className="loginTitle">
        <h3 id="login">{this.state.registerActive ? "Please Complete Registration Form" : "Please Login"}</h3>
        <form onSubmit={this.handleSubmit} className="registrationForm">
          {this.state.registerActive && <div>
            <label className="formFont" htmlFor="first_name">First Name</label>
            <input onChange={this.handleInput} type="text" id="first_name" className="registration"></input>

            </div>}

            <label className="formFont" htmlFor="username">User Name</label>
            <input onChange={this.handleInput} type="text" id="username" className="registration" value={this.state.username}></input>
            <label className="formFont" htmlFor="password">Password</label>
            <input onChange={this.handleInput} type="password" id="password" className="registration" value={this.state.password}></input>

        {this.state.registerActive && <div>
          <label className="formFont" htmlFor="repassword">Re-enter password</label>
          <input onChange={this.handleInput} type="text" id="repassword" className="registration"></input>
          <label className="formFont" htmlFor="pin">PIN</label>
          <input onChange={this.handleInput} type="text" id="pin" className="registration"></input>

        </div> }
        <button type="submit" className="submitButton">submit</button>
      </form>
      <button className="toggleButton" onClick={this.switchComponents}>{this.state.registerActive ? 'Or Login Here' : 'Or Signup Here'}</button>
    </div>
    )
  }
}

export default withRouter(LoginSignup)
