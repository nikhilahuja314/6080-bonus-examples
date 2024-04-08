import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getJoke } from './api/joke';

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept': 'application/json'
      }
    });

    const jokeContent = await jokeResponse.json();
    setJoke(jokeContent.joke);
  }

  useEffect(() => {
    getJoke()
  }, [])

  return (
    <>
      <h1>Click the button for a new dad joke</h1>
      <p>{joke}</p>
      <button onClick={getJoke}>Click me!</button>
    </>
  )
}

export default App
