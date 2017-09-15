import React, {Component} from 'react';
import '../../assets/App.css'
import { withRouter } from 'react-router-dom';

class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event){
    this.setState({
      [event.target.id]:event.target.value
    })
  }


  handleSubmit(event){
    const {username, password} = this.state
    event.preventDefault()
    this.props.onAdminLogin(
        {username,
          password}
        )
    this.props.history.push('/Adminpage')
  }

  render() {
    return (
      <div>
        <form className="registrationForm" onSubmit={this.handleSubmit}>
        <label className="formFont" htmlFor="username">User Name</label>
        <input onChange={this.handleInput} type="text" id="username" className="registration" value={this.state.username}></input>
        <label className="formFont" htmlFor="password">Password</label>
        <input onChange={this.handleInput} type="password" id="password" className="registration" value={this.state.password}></input>
        <button type="submit" className="submitButton">submit</button>
        </form>
    </div>
    )
  }
}

export default withRouter(Admin)
