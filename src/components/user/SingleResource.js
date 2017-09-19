import React, { Component } from 'react'
import pin from '../../assets/pin.png'


class SingleResource extends Component{
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
    let userResources = this.props.data.user.user.resources

    return(
      <div className="resourcePage">
        <div className="tooltip"><img alt="icon" onClick={this.addArticle} className="pinIcon"  src={pin} />
          <span className="tooltiptext">Click to Pin Article</span>
        </div>
        <h1 className="singleResourceTitle">{resource && resource.title}</h1>
        <div className="resourceStyle">
  </div>
    <div className="embeded">

          <object className="resource"  data={ resource && resource.article} width="800px" height="700px" type='application/pdf' />

        </div>
      </div>
    )
  }
}



export default SingleResource
