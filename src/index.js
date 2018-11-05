// store what we get from server in an array and filter through that
let localPokemons = []
let searchValue = '';
const pokemonsContainer = document.querySelector('#pokemon-container');
const pokemonSearchInput = document.querySelector('#pokemon-search-input');

const showPokemon = pokemon => {
  const pokemonDiv = document.createElement('div')
  pokemonDiv.className = 'pokemon-container'
  pokemonDiv.innerHTML =
   `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="2" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>`

  let img = pokemonDiv.querySelector('.toggle-sprite')
  img.addEventListener('click', event => {
    // checking if img.src is front or back and toggle it plus assign it to img.src to change the img in the DOM to the value we get
    img.src = img.src === pokemon.sprites.front ? pokemon.sprites.back : pokemon.sprites.front
  })

  pokemonsContainer.appendChild(pokemonDiv)
}


const showPokemons = pokemons => {
  pokemonsContainer.innerHTML = ''
  pokemons.forEach(pokemon => showPokemon(pokemon))
}

pokemonSearchInput.addEventListener('keyup', () => {
  searchValue = pokemonSearchInput.value.toLowerCase()
  const matchingPokemons = localPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue))
  showPokemons(matchingPokemons)
})

getPokemons()
  .then(pokemons => {
    localPokemons = pokemons
    showPokemons(pokemons)
  })
