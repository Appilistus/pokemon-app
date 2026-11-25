import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication'
import './App.css'

function App() {

  const [showApp, setShowApp] = useState(false)

  return (
    <>
      <h1>Pokemon Application</h1>
      <button onClick={() => setShowApp(!showApp)}>
        {showApp ? "Close" : "Start Pokemon App"}
      </button>
      {showApp && <PokemonApplication />}
    </>
  )
}

export default App
