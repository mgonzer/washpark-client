import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class PatientPage extends Component {
  constructor(props){
    super(props)

  }

  componentWillMount(){
    this.props.onGetPatients()
  }


  render(){
    return(
      <div>
        <h1 className="welcomeTitle">Patients</h1>
          <ul className="patientList">
            { this.props.data.user.users && this.props.data.user.users.map(patient=>
            <Link className="individualPatient" to={`/Adminpage/patients/${patient.id}`}><li>{patient.id}: {patient.first_name}</li></Link>)}
          </ul>
      </div>
    )
  }
}

export default withRouter(PatientPage)
