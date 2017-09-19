import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment'

class TreatmentPage extends Component {
  // constructor(props){
  //   super(props)
  // }

  componentWillMount(){
    this.props.onLoadPatientData()
  }

  renderNotes(){
    let user = this.props.data.user
    return user.user.notes && user.user.notes.reverse().map(n=>
      <li key={n.id} ><span className="dateAddedUser"><Moment format="MM/DD/YYYY">{n.created_at}</Moment> </span> {n.body}</li>
    )
  }

  render(){
    let {user} = this.props.data.user
    return(
      <div className="dashboardDiagnosis">
        <h1 className="welcomeTitle">Diagnosis/Treatment Plan</h1>
        <div className="diagnosisGrid">
          <div className="diagnosisTreatment">
            <h3 className="diagnosisHeading">Diagnosis</h3>
            <hr/>
            <p className="diagnosisP">{this.props.data.user.user.diagnosis}</p>
            <h4 className="diagnosisHeading">Treatment Plan</h4>
            <hr />
            <p className="diagnosisP">{this.props.data.user.user.treatment_plan}</p>
          </div>
          <div className="diagnosisTreatment">
            <h4 className="diagnosisHeading">Notes:</h4>
            <ul className="noteList">
              { this.renderNotes() }
            </ul>
          </div>

        </div>

      </div>
    )
  }
}


export default withRouter(TreatmentPage)
