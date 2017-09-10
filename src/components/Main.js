import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Admin from './Admin';
import Register from './Register'
import User from './User'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      uname: ''
    }
    this.changeName = this.changeName.bind(this);
  }

changeName(value){
  this.setState({
    uname: value
  })
}

  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <LoginSignup {...props} changeName={this.changeName} />} />
          <Route exact path='/Admin' component={Admin} />
          <Route exact path='/User' render={(props) => <User {...props} name={this.state.uname} />} />
        </Switch>
      </main>
    )
  }
}

export default Main
