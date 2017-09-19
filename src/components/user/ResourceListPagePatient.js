import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class ResourceListPage extends Component {
  constructor(props){
    super(props)
    // let category = this.props.history.location.pathname.split('/')
    // let category1 = category[category.length-1]
    // this.state = {
    //   title: '',
    //   category: category1,
    //   type: '',
    //   article: '',
    //   showForm: false
    // }
    //
    // this.handleInput = this.handleInput.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.toggleForm = this.toggleForm.bind(this)
  }

  componentWillMount(){
    let category = this.props.history.location.pathname.split('/')
    let category1 = category[category.length-1]
    console.log(category1);
    this.props.onGetSomeResources(category1)
  }
  //
  //
  // handleInput(event){
  //   this.setState({
  //     [event.target.id]:event.target.value
  //   })
  // }
  //
  // handleSubmit(event){
  //   event.preventDefault()
  //   this.props.onAddResource({
  //     title: this.state.title,
  //     type: this.state.type,
  //     category: this.state.category,
  //     article: this.state.article
  //   })
  //
  // }
  //
  // toggleForm(){
  //   this.setState({
  //     showform: this.state.showform ? false : true
  //   })
  // }

  renderResources(){
    return this.props.data.resources.resources.map(resource =>
      <Link to={`/resources/${resource.id}`}><li key={resource.id} className="resourceList">{resource.title}</li></Link>
    )
  }

  render(){
    let category = this.props.history.location.pathname.split('/')
    let category1 = category[category.length-1]
    let category2 = category1.charAt(0).toUpperCase() + category1.slice(1)
    return(
      <div>
        <h3 className="welcomeTitle">{category2}</h3>
        <ul className="resourceListFiltered">
          { this.renderResources() }
        </ul>
      </div>
    )
  }
}

export default withRouter(ResourceListPage)
