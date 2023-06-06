import React, { Component } from 'react';
import { addPerson } from './formSlice';
//burada kaldım

export class Form extends Component {
  render() {
    return (
      <div className='formDiv'>
        <input type='text' placeholder='Name..' />
        <input type='text' placeholder='Phone..' />
        <button>Add Person</button>
      </div>
    )
  }
}

export default Form