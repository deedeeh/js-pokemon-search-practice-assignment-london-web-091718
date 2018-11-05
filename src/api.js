const getPokemons = () => {
  return fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
  }
