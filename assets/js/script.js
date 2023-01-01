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

  function requestPokemons() {
    axios
      .get(url)
      .then(function (response) {
        let pokemons = response.data.results;

        let list = document.querySelector(".pokemon-list");

        list.innerHTML = "";

        pokemons.forEach(function (pokemon, until) {
          console.log(pokemon);

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
        alert("Request error");
      });
  }

});
