import React, { Component } from 'react';


class User extends Component {
  render(){
    return(
      <div>
        <h1 className="welcomeTitle">Welcome {this.props.name}</h1>
      </div>
    )
  }
}


export default User;



//Browser router withRouter middleware. Get hsitory props to push 
