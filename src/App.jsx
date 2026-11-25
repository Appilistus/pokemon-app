import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication'
import './App.css'

function App() {

  const [showApp, setShowApp] = useState(false)

  return (
    <div className="start">
      <h1>Pokemon Application</h1>
      <button onClick={() => setShowApp(!showApp)}>
        {showApp ? "Close" : "Start"}
      </button>
      {showApp && <PokemonApplication />}
    </div>
  )
}

export default App
