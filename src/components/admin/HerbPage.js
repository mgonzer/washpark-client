import React, { Component } from 'react'


class HerbPage extends Component {
  constructor(props){
    super(props)
    this.renderHerbList = this.renderHerbList.bind(this)
  }

componentWillMount(){
  this.props.onGetHerbs()

}

renderHerbList(){
  let herbs = (this.props.data.herbs.herbs).sort(function(a,b) {
    let A = a.name.toLowerCase(), B=b.name.toLowerCase()
    if(A < B){
      return -1
    }
    if(A > B){
      return 1
    }else{
      return 0
    }
  })
  console.log(herbs);
  return herbs.map(herbs =>
    <li>{herbs.name} - Quantity:{herbs.quantity}</li>
  )

}
  render(){

    return(
      <div>
        <h1 className="welcomeTitle">Herbs</h1>
          <ul className="patientList">
            { this.renderHerbList() }
          </ul>

      </div>
    )
  }
}

export default HerbPage
