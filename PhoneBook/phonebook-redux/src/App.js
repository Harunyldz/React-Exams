import React from 'react';
import Form from './features/Form';
import List from './features/List';
import './app.css';

function App() {
  return (
    <div className='mainDiv'>
      <h3>Phone Book</h3>
      <List />
      <Form />
    </div>
  );
}

export default App;
