import React from 'react';
import logo from './logo.svg';
import './App.css';
import UglyPanda from './imgs/uglypanda.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ugly Panda</h1>
        <img src={UglyPanda} style={{ width: 500 }}/>
      </header>
    </div>
  );
}

export default App;
