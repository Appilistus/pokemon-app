function Pokemon ({ name, img, type, weight, height }) {
  return (
    <div className="pokemon-details">
      <img src={img} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <h3>Type: {type}</h3>
        <h3>Weight: {weight / 10} kg</h3>
        <h3>Height: {height * 10} cm</h3>
      </div>
    </div>
  )
}

export default Pokemon
