import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import woman from '../../assets/pregnancy.png'
import resources from '../../assets/resource.png'
import herbs from '../../assets/herbs.png'

class AdminPage extends Component {
  render(){
    return(
      <div >
        <h1 className="welcomeTitle"> Welcome Admin</h1>
        <div className="gridContainer">
          <Link to='/Adminpage/Patients'><div className="gridItem"><img className="adminIcon" src={woman}></img><h2>Patients</h2></div></Link>
          <Link to='/Adminpage/Resources'><div onClick={this.props.onGetResources} className="gridItem"><img className="adminIcon" src={resources}></img><h2>Resources</h2></div></Link>
          <Link to='/Adminpage/Herbs' ><div  className="gridItem"><img className="adminIcon" src={herbs}></img><h2>Herbs</h2></div></Link>
        </div>
      </div>
    )
  }
}

export default AdminPage


// <PatientList  data={this.props.data}/>
