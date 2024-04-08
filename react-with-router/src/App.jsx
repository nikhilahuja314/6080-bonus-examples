import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to='/random-1'>See Page 1</Link>
      <br />
      <Link to='/random-2'>See Page 2</Link>
    </>
  )
}

export default App
