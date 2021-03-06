import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class PatientPage extends Component {
  // constructor(props){
  //   super(props)
  //
  // }

  componentWillMount(){
    this.props.onGetPatients()


  }


  render(){
    return(
      <div>
        <h1 className="welcomeTitle">Patients</h1>
          <ul className="patientList">
            { this.props.data.user.users[0] && this.props.data.user.users.sort((a,b)=> a.id - b.id).map(patient=>
            <Link className="individualPatient" to={`/Adminpage/patients/${patient.id}`}>
              <li key={patient.id} id="patientFirstName">{patient.id}: {patient.first_name}</li>
            </Link>)}
          </ul>

      </div>
    )
  }
}

export default withRouter(PatientPage)
