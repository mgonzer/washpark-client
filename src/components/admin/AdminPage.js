import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import woman from '../../assets/pregnancy.png'
import resources from '../../assets/resource.png'
import herbs from '../../assets/herbs.png'

class AdminPage extends Component {
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   this.props.onGetHerbs()
  // }
  render(){
    return(
      <div >
        <h1 className="welcomeTitle"> Welcome Admin</h1>
        <div className="gridContainer">
          <Link to='/Adminpage/patients'><div className="gridItem"><img alt="icon" className="adminIcon" src={woman}></img><h2>Patients</h2></div></Link>
          <Link to='/Adminpage/resources'><div onClick={this.props.onGetResources} className="gridItem"><img alt="icon" className="adminIcon" src={resources}></img><h2>Resources</h2></div></Link>
          <Link to='/Adminpage/herbs' ><div  className="gridItem"><img alt="icon" className="adminIcon" src={herbs}></img><h2>Herbs</h2></div></Link>
        </div>
      </div>
    )
  }
}

export default withRouter(AdminPage)


// <PatientList  data={this.props.data}/>
