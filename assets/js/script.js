document.addEventListener("DOMContentLoaded", function () {
  let until = 0;

  let generations = {
    generation1: { from: 1, to: 151 },
    generation2: { from: 152, to: 251 },
    generation3: { from: 252, to: 386 },
  };

  let buttons = document.querySelectorAll("button[id^=generation]");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      until = until + generations[event.target.id]["to"];
      url = `https://pokeapi.co/api/v2/pokemon?limit=${generations[event.target.id]["to"]}`;
      requestPokemons();
    });
  });

  let searchBtn = document.querySelector('.search');
  let input = document.querySelector('.input');
  searchBtn.addEventListener('click', function() {
    let name = input.value; 
   
    url2 = `https://pokeapi.co/api/v2/pokemon/${name}`;
    pokemonPrint();    
  });

});

function requestPokemons() {
  axios
    .get(url)
    .then(function (response) {
      let pokemons = response.data.results;

      let list = document.querySelector(".pokemon-list");

      list.innerHTML = "";

      pokemons.forEach(function (pokemon, until) {

        let pokemon_div = `
                  <div class="col-sm-4 text-bg-primary">
                  <h2>${pokemon.name}</h2>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${until + 1}.png">
                  </div>
              `;

        list.innerHTML = list.innerHTML + pokemon_div;
      });
    })
    .catch(function (error) {
      console.log("Request error");
    });
}

function pokemonPrint() {
  axios.get(url2)
     .then(function (Response) {

        let infod = Response.data;
        let div_der = document.querySelector('.poke-found');       
        const box = document.createElement("div");

         box.innerHTML = `
         <div class="info text-center col-sm-4 text-bg-primary">
          <h2>${infod.name}</h2>            
          <img class="imagen-bus" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${infod.id}.png">
          <p><span>Type: </span><span>${infod.types[0].type.name}</span></p>
          </div>
        `;
        
         box.classList.add("box");
         div_der.appendChild(box);

     })
     .catch(function (error) {
      console.log('Request error');
     });
}