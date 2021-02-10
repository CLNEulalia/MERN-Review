import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ComOne from './ComOne'
import ComTwo from './ComTwo'
import FormOne from './FormOne'
import TweetItem from './TweetItem'
import Polly from './Poller'

function App() {

  const [stateOne, setStateOne] = useState("one")
  const [stateTwo, setStateTwo] = useState("two")
  const [tweets,   setTweets  ] = useState([])
  const [bPolling, setBPolling] = useState(false)

  const tweetsView = tweets
    .sort((a,b) => b.likes - a.likes)
    .map(tweet => {
      return (<TweetItem 
                tweet={tweet.text} 
                likes={tweet.likes} 
                _id=  {tweet._id}  
              />)
  })

  Polly(tweets, setTweets, bPolling, setBPolling)

  return (
    <div className="App">
      <header className="App-header">
        <h1> What up </h1>
        <ComOne s={stateOne} />
        <ComTwo s={stateTwo} />
        {tweetsView}
        <FormOne 
          setter={setStateOne} 
          setterTwo={setStateTwo}
          tweets={tweets}
          setTweets={setTweets}
          />
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
