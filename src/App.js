import React from 'react';
import './App.css';
import Main from './Main/main';
import Navbar from './Navbar/navbar';
import Utilities from './Utilities/utilities';

function App() {
  return (
    <div className="App">
      <Utilities/>
      <Navbar/>
      <div className='body'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
