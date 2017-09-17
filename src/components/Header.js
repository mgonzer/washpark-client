import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import logo from '../assets/wplogo.png'
import '../assets/App.css'


class Header extends Component {
  constructor(props){
    super(props)

    this.goHome = this.goHome.bind(this)
  }

goHome(){
    if(localStorage.id === 'admin'){
      this.props.history.push('/Adminpage')
    }else{
      this.props.history.push('/Dashboard')
    }

}

  render() {
    return (
        <div className="navbar">
          <img onClick={this.goHome} alt="Logo" id="logo" src={logo}></img>
          <p className="poweredBy">Powered by <span id="lunaPortal">Luna Portal</span></p>
        </div>
    )
  }
}

export default withRouter(Header)
