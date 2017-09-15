import React, { Component } from 'react'
import Moment from 'react-moment'


class SinglePatient extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      notes: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  componentDidMount(){
    let id = parseInt(this.props.history.location.pathname.split("/")[3])
    this.props.onGetOnePatient(id)
  }

  componentWillReceiveProps(newProps){
      const {notes} = newProps.data.user.user.data
      console.log(notes);
      if( notes != this.state.notes){

        this.setState({notes: notes})
        this.forceUpdate()
      }
  }

  handleInput(event){
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let id = this.props.history.location.pathname.split("/")
    let id1 = parseInt(id[id.length-1])
    this.props.onAddNote(id1, {
    body: this.state.body})
    this.state.body = ''
  }



  render(){
    let user = this.props.data.user.user.data
    return(
      <div>
        <h1 className="welcomeTitle">Single Patient </h1>
        <div className="singlePatientView">
          <h2>{user && user.first_name} (ID:{user && user.id})</h2>
          <h4>Diagnosis:  {user && user.diagnosis}</h4>
          <h4>Treatment Plan: {user && user.treatment_plan}</h4>
          <h4>Notes:</h4>
          <ul className="noteList">
            { user && this.state.notes.map(note=>
              <li key={`${user.name}${note.id}`}>{note.body} / Date Added: <Moment format="MM/DD/YYYY">{note.created_at}</Moment></li>
            )}
          </ul>
          <p>Add note:</p>
          <form onSubmit={this.handleSubmit}>
            <textArea onChange={this.handleInput} id="body" className="noteInput" value={this.state.body}></textArea>
            <button id="noteSubmitButton" type="submit">Add Note</button>
          </form>

        </div>

      </div>
    )
  }
}


export default SinglePatient
