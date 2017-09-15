import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import pin from '../../assets/pin.png'


class SingleResource extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let id = (this.props.history.location.pathname.split('/'));
    let id1 = parseInt(id[id.length-1]);
    this.props.onGetOneResource(id1);
  }

  render(){
    let resource = this.props.data.resources.resources[0]
    return(
      <div className="resourcePage">
          <div className="tooltip"><img className="pinIcon"  src={pin} /><span className="tooltiptext">Click to Pin Article</span></div>
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



export default SingleResource
