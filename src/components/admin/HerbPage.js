import React, { Component } from 'react'


class HerbPage extends Component {
  constructor(props){
    super(props)
    this.renderHerbList = this.renderHerbList.bind(this)
    this.updateHerbs = this.updateHerbs.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addNewHerb = this.addNewHerb.bind(this)
    this.state ={
      newHerb: ''
    }
  }

componentWillMount(){
  this.props.onGetHerbs()
}

componentDidMount(){
  let obj = {}
  this.props.data.herbs.herbs.map((item,i)=>{
    obj[item.name] = item
  })
  this.setState(obj)
  console.log(this.props.data.herbs.herbs);
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


  return herbs.map((herbals,i)=>
    <li id="herbList">{herbals.name}
       <span className="quantitySpan">Quantity:{herbals.quantity}
       <input onChange={this.handleInput}
        key={herbals.id}
         name={herbals.name}
         className="herbInput"
         value={this.state[herbals.name]}></input>
       <button name={herbals.name} value={this.state[herbals.name]} id={herbals.id} onClick={this.updateHerbs}>update</button></span>
    </li>
  )
}

handleInput(event){
  this.setState({
    [event.target.name]: event.target.value
  })
}

updateHerbs(event){
  event.preventDefault()
  this.props.onUpdateHerbs(event.target.id, {quantity: event.target.value})
  this.setState({
    [event.target.name] : ''
  })
}

addNewHerb(event){
  event.preventDefault()
  this.props.onAddHerb({name: this.state.newHerb})
}

  render(){

    return(
      <div>
        <h1 className="welcomeTitle">Inventory</h1>
          <form onSubmit={this.addNewHerb} id="newHerbForm">Add New Herb:
            <input id="newHerbInput" onChange={this.handleInput} name="newHerb" value={this.state.newHerb}></input>
            <button type="submit">Submit</button>
          </form>
        <div className="patientList">
          <ul ><u>Herbs</u>
            { this.renderHerbList() }
          </ul>

        </div>


      </div>
    )
  }
}

export default HerbPage
