import React, {Component} from 'react'
import Moment from 'react-moment'

class SinglePatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      notes: [],
      resource_id: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleResourceChange = this.handleResourceChange.bind(this)
    this.submitResource = this.submitResource.bind(this)
  }
  componentDidMount() {
    let id = parseInt(this.props.history.location.pathname.split("/")[3])
    this.props.onGetOnePatient(id)
    this.props.onGetResources()
  }

  componentWillReceiveProps(newProps) {
    const {notes} = newProps.data.user.user.data
    // console.log(notes);
    if (notes !== this.state.notes) {

      this.setState({notes: notes})
      this.forceUpdate()
    }
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let id = this.props.history.location.pathname.split("/")
    let id1 = parseInt(id[id.length - 1])
    this.props.onAddNote(id1, {body: this.state.body})
    this.state.body = ''
  }

  handleResourceChange(event){
    this.setState({
      resource_id: event.target.value
    })
  }

  submitResource(event){
    event.preventDefault()
    let id = this.props.history.location.pathname.split("/")
    let id1 = parseInt(id[id.length - 1])
    console.log(id1);
    console.log(this.state.resource_id);
    this.props.onPinArticlePractitioner(id1, {resource_id: this.state.resource_id})
  }

  render() {
    let user = this.props.data.user.user.data
    return (
      <div className="dashboardDiagnosis">
        <h1 className="welcomeTitle">{user && user.first_name}
          (ID:{user && user.id})</h1>
        <div className="singlePatientView">
          <div className="treatmentGridItem">
            <h3 className="diagnosisHeading">Diagnosis</h3>
            <hr/>
            <p className="diagnosisP">{user && user.diagnosis}</p>
            <h3 className="diagnosisHeading">Treatment Plan</h3>
            <p className="diagnosisP">{user && user.treatment_plan}</p>
            <h4 className="diagnosisHeading">Notes</h4>
            <hr/>
            <ul className="noteListAdmin">
              {user && this.state.notes.map(note => <li key={`${user.name}${note.id}`}>{note.body}
                / Date Added:
                <Moment format="MM/DD/YYYY">{note.created_at}</Moment>
              </li>)}
            </ul>
            <p id="addNote">Add note:</p>
            <form onSubmit={this.handleSubmit}>
              <textArea onChange={this.handleInput} id="body" className="noteInput" value={this.state.body}></textArea>
              <button id="noteSubmitButton" type="submit">Add Note</button>
            </form>

          </div>
          <div className="treatmentGridItem">
            <h3 className="diagnosisHeading">Pinned Resources</h3>
            <hr />
          <ul>
              {user && user.resources.map(resource => <li>{resource.title}</li>)}
            </ul>
            <h3>All Resources</h3>
            <select onChange={this.handleResourceChange}>
              {this.props.data.resources.resources && this.props.data.resources.resources.map(resources =>
                <option value={resources.id}>{resources.title}</option>
              )}
            </select>
            <button onClick={this.submitResource}>Add Resource</button>
          </div>
        </div>

      </div>
    )
  }
}

export default SinglePatient
