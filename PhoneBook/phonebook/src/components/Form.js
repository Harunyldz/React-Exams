import React, { Component } from 'react'

export class Form extends Component {
  state={
    name:'',
    phone:''
  }
  onSubmit=(event)=>{
    event.preventDefault();
    if(this.state.name===''||this.state.phone===''){
      alert('Please fill all fields')
    }
    else{
      this.props.addContact(this.state)
      this.setState({name:'',phone:''})
    }
  }

  onChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input type='text' name='name' id='name' placeholder='Name' value={this.state.name} onChange={this.onChange}/>
        <input type='text' name='phone' id='phone' placeholder='Phone' value={this.state.phone} onChange={this.onChange}/>
        <button type='submit'>ADD</button>
        </form>
      </div>
    )
  }
}

export default Form