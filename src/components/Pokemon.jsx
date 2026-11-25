function Pokemon ({ name, img, type, weight, height }) {
  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <h3>Type: {type}</h3>
      <h3>Weight: {weight / 10} kg</h3>
      <h3>Height: {height * 10} cm</h3>
    </>
  )
}

export default Pokemon
