import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export class Contact extends Component {

state={
    contacts:[
        {name:'Ali', phone:'0555 789 2114'},
        {name:'Ayşe', phone:'0444 698 2136'},
        {name:'Hasan', phone:'0333 698 7854'}
    ]
}

addContact=(newContact)=>{
  this.setState({contacts:[...this.state.contacts,newContact]})
}

  render() {
    return (
      <div>
        <h1>Phone Book</h1>
        <List contacts={this.state.contacts}></List>
        <Form addContact={this.addContact}></Form>
      </div>
    )
  }
}

export default Contact