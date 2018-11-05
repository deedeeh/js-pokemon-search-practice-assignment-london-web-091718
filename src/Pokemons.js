//not completed code to convert my code to object-oriented with class
// will work on it once I feel comfortable with classes

class Pokemon {
  constructor(pokemon) {
    this.name = name
    this.frontImage = pokemon.sprites.front,
    this.backImage = pokemon.sprites.back,
    this.pokemonsContainer = document.querySelector('#pokemon-container')
  }

  flipImage () {
    let img = this.pokemonDiv.querySelector('.toggle-sprite')
    img.addEventListener('click', event => {
      // checking if img.src is front or back and toggle it plus assign it to img.src to change the img in the DOM to the value we get
      img.src = img.src === this.sprites.front ? this.sprites.back : this.sprites.front
    })
  }

  render() {
    const pokemonDiv = document.createElement('div')
    pokemonDiv.className = 'pokemon-container'
    pokemonDiv.innerHTML =
     `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="2" data-action="flip" class="toggle-sprite" src="${this.sprites.front}">
            </div>
          </div>
        </div>`


    this.pokemonsContainer = pokemonsContainer
    pokemonsContainer.appendChild(pokemonDiv)
  }

}
