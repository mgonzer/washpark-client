import React, { Component } from 'react'
import qifolder from '../../assets/qifolder.png'
import { Link, withRouter } from 'react-router-dom'

class ResourcePage extends Component {
  // constructor(props){
  //   super(props)
  // }

  // componentWillMount(){
  //   this.props.onGetResources()
  // }
  //
  // renderResources(){
  //   return this.props.data.resources.resources.map(resource =>
  //     <li>Name:{resource.title}</li>
  //   )
  // }

  render(){
    return(
      <div>
        <h1 className="welcomeTitle">All Resources</h1>
          <div className="gridResources">
            <Link to='/Resources/category/general'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>General/Welcome</h4></div></Link>
            <Link to='/Resources/category/pregnancy'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Pregnancy</h4></div></Link>
            <Link to='/Resources/category/breastfeeding'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Breastfeeding</h4></div></Link>
            <Link to='/Resources/category/ovulation'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Ovulation</h4></div></Link>
          </div>
        <div className="gridResources">
          <Link to='/Resources/category/blood'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Phase 1-Blood</h4></div></Link>
          <Link to='/Resources/category/yin'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Phase 2-Yin</h4></div></Link>
          <Link to='/Resources/category/yang'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Phase 3-Yang</h4></div></Link>
          <Link to='/Resources/category/qi'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Phase 4-Qi</h4></div></Link>
        </div>
        <div className="gridResources">
          <Link to='/Resources/category/ovulation'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Ovulation</h4></div></Link>
          <Link to='/Resources/category/mens'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Mens Health</h4></div></Link>
          <Link to='/Resources/category/exercies'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Exercise</h4></div></Link>
          <Link to='/Resources/category/diet'><div><img alt="icon" className="adminIcon" src={qifolder}></img><h4>Diet</h4></div></Link>
        </div>


      </div>
    )
  }
}

export default withRouter(ResourcePage)
