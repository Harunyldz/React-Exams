import React, { Component } from 'react'

export class Counter extends Component {
    state={number:''}
    increment=()=>{
        var newNumber=this.state.number
        this.setState({number: newNumber+1})
    }
    decrement =()=>{
        var newNumber=this.state.number
        this.setState({number: newNumber-1})
    }
    randomNumber=()=>{
        var rnd=Math.floor((Math.random()*200))
        this.setState({number: rnd})
    }
  render() {
    return (
      <div className='counterDiv'>
        <h1>Counter App</h1>
        <div className='innerDiv'>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.number}</span>
            <button onClick={this.increment}>+</button>
        </div>
        <button id='addBtn' onClick={this.randomNumber}>Add Number</button>

      </div>
    )
  }
}

export default Counter