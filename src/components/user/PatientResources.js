import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import pin from '../../assets/pin.png'

class PatientResources extends Component {
  // constructor(props){
  //   super(props)
  // }

  renderResources(){
    let resources = this.props.data.user.user.resources.sort((a,b)=>{
      let A = a.title.toLowerCase(), B = b.title.toLowerCase()
      if(A < B){
        return -1
      }
      if(A > B){
        return 1
      }else{
        return 0
      }
    })
    return resources.map(r=>
    <Link key={r.id} to={`/resources/${r.id}`}><img className="pinResource" src={pin}/><li key={r.id} className="resourceList">{r.title}</li></Link>)
  }

  render(){
    return (
      <div  className="pinnedResources">
        <h3 className="welcomePinBoard">Pinned Artilces/Resources </h3>
        <hr />
        <ul   >
          { this.renderResources() }
        </ul>
      </div>
    )
  }
}

export default withRouter(PatientResources)
