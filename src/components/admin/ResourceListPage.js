import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class ResourceListPage extends Component {
  constructor(props){
    super(props)
    let category = this.props.history.location.pathname.split('/')
    let category1 = category[category.length-1]
    this.state = {
      title: '',
      category: category1,
      type: '',
      article: '',
      showForm: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  componentWillMount(){
    let category = this.props.history.location.pathname.split('/')
    let category1 = category[category.length-1]
    console.log(category1);
    this.props.onGetSomeResources(category1)
  }

  renderResources(){
    return this.props.data.resources.resources.map(resource =>
      <Link to={`/Adminpage/resources/${resource.id}`}><li className="resourceList">{resource.title}</li></Link>
    )
  }

  handleInput(event){
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onAddResource({
      title: this.state.title,
      type: this.state.type,
      category: this.state.category,
      article: this.state.article
    })

  }

  toggleForm(){
    this.setState({
      showform: this.state.showform ? false : true
    })
  }


  render(){
    return(
      <div>
        <ul className="resourceListFiltered">
          { this.renderResources() }
        </ul>
        <button onClick={this.toggleForm}className="toggleAddResourceButton">Add Resouce</button>
        {this.state.showform &&
          <div>
            <form className="addResourceForm" onSubmit={this.handleSubmit}>
              <label>Title</label>
              <input onChange={this.handleInput} className="registration" id="title" required></input>
              <label>Type</label>
              <input onChange={this.handleInput} className="registration" id="type" required></input>
              <label>Article URL</label>
              <input onChange={this.handleInput} className="registration" id="article" required></input>
              <button className="addResourceButton" type="submit">Add Resource</button>
            </form>
          </div>}

      </div>
    )
  }
}

export default withRouter(ResourceListPage)
