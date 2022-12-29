const buscarbtn = document.querySelector(".buscar");
let input = document.querySelector(".input");

buscarbtn.addEventListener("click", function () {
  let name = input.value;

  url2 = `https://pokeapi.co/api/v2/pokemon/${name}`;
  console.log(url2);
  pokemonprint();
});

// pokemon buscado en la barra

function pokemonprint() {
  test = axios
    .get(url2)
    .then(function (Response) {
      const infod = Response.data;

      const div_der = document.querySelector(".div_der");

      div_der.innerHTML =
        div_der.innerHTML +
        `
  
                 <div class="info">
                  <h1>${infod.name}</h1>
                 
  
                  <img class="imagen-bus" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${infod.id}.png">
  
  
                  <p><span>Altura</span> <span>${infod.height}</span> </p>
                  <p><span>Peso</span> <span>${infod.weight}</span></p>
                 <p> <span>Tipo</span> <span>${infod.types[0].type.name}</span></p>
                  <p><span>Habilidades</span> <span>${infod.abilities[0].ability.name}</span>
                  <span>${infod.abilities[1].ability.name}</span></p>
                  </div>
              `;
    })
    .catch(function (error) {
      alert("La petición ha fallado");
    });
}