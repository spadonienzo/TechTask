const getPokemons = require('../../controllers/getPokemons')

const getIdPokemons = async (req,res) => {

    const {id} = req.params

    try {
        
        const allPokemons = await getPokemons()
        let pokemonId = allPokemons.filter(pokemon => pokemon.id == id)
        res.status(200).json(pokemonId)

    } catch (error) {

        res.status(400).json({error: error.message})
    }
}

module.exports = getIdPokemons