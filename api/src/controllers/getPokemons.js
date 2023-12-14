const axios = require("axios");
const apiHelper = require("../helpers/apiHelper");

const getPokemons = async () => {
  // API

  let url = `https://pokeapi.co/api/v2/pokemon`;

  let promisesPokemonsApi = [];
  let rawPokemonsApi = [];
  do {
    let dataApi = await axios(url);
    promisesPokemonsApi = [
      ...promisesPokemonsApi,
      ...dataApi.data.results.map((pokemon) => {
        let data = axios(pokemon.url);
        return data;
      }),
    ];
    url = dataApi.data.next;
  } while (url && promisesPokemonsApi.length < 150);

  await Promise.all(promisesPokemonsApi).then((response) =>
    response.map((element) => rawPokemonsApi.push(element.data))
  );

  let cleanPokemonsApi = apiHelper(rawPokemonsApi);

  return cleanPokemonsApi;
};

module.exports = getPokemons;
