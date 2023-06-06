import React, { Component } from 'react';

export class List extends Component {
  render() {
    return (
      <div className='listDiv'>
        <input type='text' placeholder='Filter By Name or Phone..' />
        <ul>
          <li>
            Ali 0555 055 0505
          </li>
          <li>
            Veli 0444 055 0505
          </li>
          <li>
            Ayşe 0333 055 0505
          </li>
       
        </ul>
      </div>
    )
  }
}

export default List