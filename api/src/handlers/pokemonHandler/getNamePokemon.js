const findPokemonByQuery = require("../../controllers/findPokemonByQuery");
const getPokemons = require("../../controllers/getPokemons");

const getNamePokemon = async (req, res) => {
  try {
    const { name } = req.query;
    const results = name ? await findPokemonByQuery(name) : await getPokemons();
    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getNamePokemon;
