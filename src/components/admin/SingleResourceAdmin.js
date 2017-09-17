import React, { Component } from 'react'
import pin from '../../assets/pin.png'


class SingleResourceAdmin extends Component{
  constructor(props){
    super(props)

    this.addArticle = this.addArticle.bind(this)
  }

  componentDidMount(){
    let id = (this.props.history.location.pathname.split('/'));
    let id1 = parseInt(id[id.length-1]);
    this.props.onGetOneResource(id1);
  }

  addArticle(){
    this.props.onPinArticle({resource_id:this.props.data.resources.resources[0].id})
  }

  render(){
    let resource = this.props.data.resources.resources[0]
    return(
      <div className="resourcePage">
        <h1 className="welcomeTitle">{resource && resource.title}</h1>
        <div className="resourceStyle">
  </div>
    <div className="embeded">

          <object  data={ resource && resource.article} width="800px" height="700px" type='application/pdf' />

        </div>
      </div>
    )
  }
}



export default SingleResourceAdmin

// <div className="tooltip"><img alt="icon" onClick={this.addArticle} className="pinIcon"  src={pin} /><span className="tooltiptext">Click to Pin Article</span></div>
