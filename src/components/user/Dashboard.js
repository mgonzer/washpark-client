import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import diagnosis from '../../assets/diagnosis.png'
import resource from '../../assets/resource.png'
import schedule from '../../assets/schedule.png'
import kindara from '../../assets/kindara.png'
import allResources from '../../assets/allresources.png'

class Dashboard extends Component {
  constructor(props){
    super(props)
  }

componentWillMount(){
  this.props.onLoadPatientData()
}

  render(){
    const {user} = this.props.data.user
    return(
      <div className="dashboard">
        <h1 className="welcomeTitleDashboard">Welcome {user.first_name}</h1>
          <div className="gridContainer">
            <Link className="clickedOn" to='/Treatment'><div className="gridItem"><img className="adminIcon" src={diagnosis}></img><h3>Treatment Plan</h3></div></Link>
            <Link className="clickedOn" to='/Pinned'><div className="gridItem"><img className="adminIcon" src={resource}></img><h3>Pinned Resources</h3></div></Link>
            <Link className="clickedOn" to='/Resources'><div className="gridItem"><img className="adminIcon" src={allResources}></img><h3>All Resources</h3></div></Link>

          </div>
          <div className="gridContainer">
            <Link className="clickedOn" to='/Schedule'><div className="gridItem"><img className="adminIcon" src={schedule}></img><h3>Schedule</h3></div></Link>
            <Link className="clickedOn" to='/Kindara'><div className="gridItem"><img className="adminIcon" src={kindara}></img><h3>Kindara</h3></div></Link>
          </div>
      </div>
    )
  }
}


export default withRouter(Dashboard);

// <Link to='/Dashboard/Resources'><div onClick={this.props.onGetResources} className="gridItem"><img className="adminIcon" src={resources}></img><h2>Resources</h2></div></Link>
// <Link to='/Dashboard/Notes' ><div onClick={this.props.onGetHerbs} className="gridItem"><img className="adminIcon" src={herbs}></img><h2>Herbs</h2></div></Link>


// <h3>Diagnosis: {user.diagnosis} </h3>
// <h3>Resources</h3>
// <ul>
//     { user.resources.map( r =>
//       <div>
//         <li key={r.id}>{r.title}</li>
//         <p key={r.article}>{r.article}</p>
//       </div>
//     )}
//   </ul>
//   <h3>Notes</h3>
//   <ul>
//     {user.notes.map(n=>
//       <li key={n.body}>{n.body}</li>
//     )}
//   </ul>
