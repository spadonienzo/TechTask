const {Pokemon, Type} = require('../db')
const {Op} = require('sequelize')
const dbHelper = require('../helpers/dbHelper')
const getPokemons = require('../controllers/getPokemons')

const findPokemonByQuery = async (name) => {

    const pokemonsDB = await Pokemon.findAll({
      where:{
          name: {[Op.iLike] : `%${name}%`}},
      include: {
          model: Type, 
          attributes: ["name"],
          through:{
              attributes: []}
          }
      })

    const cleanPokemonsDB = dbHelper(pokemonsDB)
    
    const pokemonsApi = getPokemons()
    const filteredPokemonsApi = (await pokemonsApi).filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
    
    if (!filteredPokemonsApi && !cleanPokemonsDB) return "No existe el Pokemon con ese nombre en la base de datos"
    if(cleanPokemonsDB.length) return [...filteredPokemonsApi, ...pokemonsApi]

    return filteredPokemonsApi
}

module.exports = findPokemonByQuery