const getPokemons = require("../controllers/getPokemons");

const findPokemonByQuery = async (name) => {
  const pokemonsApi = getPokemons();
  const filteredPokemonsApi = (await pokemonsApi).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
  );

  console.log(pokemonsApi);

  return filteredPokemonsApi;
};

module.exports = findPokemonByQuery;
