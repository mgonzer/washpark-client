import React, {Component} from 'react'
import Moment from 'react-moment'
import x from '../../assets/x.png'
import del from '../../assets/delete.png'

class SinglePatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      notes: [],
      resource_id: 1,
      toggleDiagnosis: false,
      toggleTreatment: false,
      diagnosis: '',
      treatment: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleResourceChange = this.handleResourceChange.bind(this)
    this.submitResource = this.submitResource.bind(this)
    this.renderTreatmentEdit = this.renderTreatmentEdit.bind(this)
    this.renderDiagnosisEdit = this.renderDiagnosisEdit.bind(this)
    this.submitNewDiagnosis = this.submitNewDiagnosis.bind(this)
    this.submitNewTreatment = this.submitNewTreatment.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.removeResource = this.removeResource.bind(this)
  }
  componentDidMount() {
    let id = parseInt(this.props.history.location.pathname.split("/")[3])
    this.props.onGetOnePatient(id)
    this.props.onGetResources()
  }

  componentWillReceiveProps(newProps) {
    const {notes} = newProps.data.user.user.data
    if (notes !== this.state.notes) {

      this.setState({notes: notes,toggleForm:false})
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

  renderDiagnosisEdit(){
    this.setState({
      toggleDiagnosis: this.state.toggleDiagnosis ? false : true
    })
  }

  renderTreatmentEdit(){
    this.setState({
      toggleTreatment: this.state.toggleTreatment ? false : true
    })
  }

  submitNewDiagnosis(){
    this.props.onUpdateUser(this.props.data.user.user.data.id, {diagnosis:this.state.diagnosis})
    this.state.toggleDiagnosis = false
    this.state.diagnosis = ''
  }

  submitNewTreatment(){
    this.props.onUpdateUser(this.props.data.user.user.data.id, {treatment_plan:this.state.treatment})
    this.state.toggleTreatment = false
    this.state.treatment = ''
  }

  deleteNote(event){
    event.preventDefault()
    console.log(event.target.id);
    this.props.onDeleteNote(this.props.data.user.user.data.id, event.target.id )
  }

  removeResource(event){
    event.preventDefault()
    this.props.onRemoveResource(this.props.data.user.user.data.id, event.target.id)
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
            <button id="diagnosisEditButton" onClick={this.renderDiagnosisEdit}>EDIT</button>
            <hr/>
            <p className="diagnosisP">{user && user.diagnosis}</p>

            {this.state.toggleDiagnosis &&
              <div className="block">
                <textArea onChange={this.handleInput} id="diagnosis" value={this.state.diagnosis}></textArea>
                <button id="noteSubmitButton" onClick={this.submitNewDiagnosis}>Submit</button>
              </div>}
            <h3 className="diagnosisHeading">Treatment Plan</h3>
            <button id="diagnosisEditButton" onClick={this.renderTreatmentEdit}>EDIT</button>
            <hr />
            <p className="diagnosisP">{user && user.treatment_plan}</p>
              {this.state.toggleTreatment &&
                <div className="block">
                  <textArea onChange={this.handleInput} id="treatment" value={this.state.treatment}></textArea>
                  <button id="noteSubmitButton" onClick={this.submitNewTreatment}>Submit</button>
                </div>}
            <h4 className="diagnosisHeading">Notes</h4>
            <hr/>
            <ul className="noteListAdmin">
              {user && this.state.notes.map(note => <li className="noteLi" key={`${user.name}${note.id}`}>
                <span className="noteBody">{note.body}</span>
                <span className="dateAdded">
                <Moment format="MM/DD/YYYY">{note.created_at}</Moment></span>
                <img src={del} className="smallImage" onClick={this.deleteNote} id={note.id} />
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
          <ul className="pinnedResourceList">
              {user && user.resources.map(resource => <div>
                <li key={resource.id} id="pinnedResourceItem"><img src={x} onClick={this.removeResource} id={resource.id} className="smallImage" />{resource.title}</li>


                </div>)}
            </ul>
            <h3 className='diagnosisHeading'>All Resources</h3>
            <hr />
            <select className="resourceDropdown" onChange={this.handleResourceChange}>
              {this.props.data.resources.resources && this.props.data.resources.resources.map(resources =>
                <option key={resources.id} value={resources.id}>{resources.title}</option>
              )}
            </select>
            <button className="pinResourceButton" onClick={this.submitResource}>Add Resource</button>
          </div>
        </div>

      </div>
    )
  }
}

export default SinglePatient
