import { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

function PokemonApplication () {

  const [pokemon, setPokemon] = useState([])
  const [chosenPokemon, setChosenPokemon] = useState("")
  const [pokemonDetails, setPokemonDetails] = useState(null)

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await res.json()
      setPokemon(data.results)
    }
    getPokemon()

  }, [])

  useEffect(() => {
    if (!chosenPokemon) {
      setPokemonDetails(null)
      return
    }

    const getPokemonDetails = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
      const data = await res.json()
      setPokemonDetails(data)
    }

    getPokemonDetails()
  }, [chosenPokemon])

  return (
    <>
      <select
        value={chosenPokemon}
        onChange={(e) => setChosenPokemon(e.target.value)}
      >
        <option value="">Select a Pokemon</option>
        {pokemon.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {pokemonDetails && (
        <Pokemon
          name={pokemonDetails.name}
          img={pokemonDetails.sprites.front_default}
          type={pokemonDetails.types.map((typeInfo) => typeInfo.type.name).join(", ")}
          weight={pokemonDetails.weight}
          height={pokemonDetails.height}
        />
      )}
    </>
  )
}

export default PokemonApplication
