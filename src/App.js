import { useState } from 'react'
import Joke from './joke';

function App() {
  const [jokeContent, setJokeContent] = useState("")

  const fetchJoke = async () => {
    let response = await fetch("https://api.chucknorris.io/jokes/random")
    let data = await response.json()
    setJokeContent(data.value)
  }

  return (
    <div className="App">
      <div id="wrapper">
        <div id="title-container">
          <h1 className="letterpress">Chuck Norris Jokes</h1>
          <h2>Generator</h2>
        </div>
        <div className="btn-group">
          <button id="get-joke-btn" onClick={fetchJoke}>Get New Joke</button>
        </div>
        <div className="container">
          <Joke joke={jokeContent} />
        </div>
      </div>
    </div>
  );
}

export default App;
