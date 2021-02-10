import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ComOne from './ComOne'
import ComTwo from './ComTwo'
import FormOne from './FormOne'

function App() {

  const [stateOne, setStateOne] = useState("one")
  const [stateTwo, setStateTwo] = useState("two")
  

  return (
    <div className="App">
      <header className="App-header">
        <h1> What up </h1>
        <ComOne s={stateOne} />
        <ComTwo s={stateTwo} />
        <FormOne setter={setStateOne} setterTwo={setStateTwo}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
