import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class PatientResources extends Component {
  constructor(props){
    super(props)
  }

  renderResources(){
    let resources = this.props.data.user.user.resources
    return resources.map(r=>
    <Link to={`/resources/${r.id}`}><li className="resourceList">{r.title}</li></Link>)
  }

  render(){
    return (
      <div >
        <h3 className="welcomeTitle">Articles/Resources</h3>
        <ul >
          { this.renderResources() }
        </ul>
      </div>
    )
  }
}

export default withRouter(PatientResources)
