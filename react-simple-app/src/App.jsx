import { useState } from 'react'
import './App.css'
import { SimplePage } from './pages/Simple'
import { Moderate } from './pages/Moderate'
import { BadState } from './pages/BadState'

const App = () => {

  const [displayedExample, setDisplayedExample] = useState('simple');

  return (
    <div>
      <h1>Click the button to load a relevant example!</h1>
      <button onClick={() => setDisplayedExample('simple')}>Load Simple Example</button>
      <button onClick={() => setDisplayedExample('badState')}>Load State Management Example (Bad)</button>
      <button onClick={() => setDisplayedExample('goodState')}>Load State Management Example (Good)</button>
      <div id='example-container'>
        {
          displayedExample === 'simple' ? <SimplePage /> 
          : displayedExample === 'badState' ? 
            <BadState /> : <Moderate /> 
        }
      </div>
    </div>
  )
}

export default App
