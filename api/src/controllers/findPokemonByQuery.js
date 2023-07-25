const axios = require('axios')
require('dotenv').config()
const {Pokemon, Type} = require('../db')
const {Op} = require('sequelize')
const dbHelper = require('../helpers/dbHelper')
const apiHelper = require('../helpers/apiHelper')

const findPokemonByQuery = async (name) => {
    const apiPokemons = (await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)).data
    const dbPokemons = await Pokemon.findAll({
        where:{
            name: {[Op.iLike] : `%${name}%`}},
        include: {
            model: Type, 
            attributes: ["name"],
            through:{
                attributes: []}
            }
        })

    const cleanApiPokemons = apiHelper(apiPokemons)
    const cleanDbPokemons = dbHelper(dbPokemons)

    const filteredApi = cleanApiPokemons.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    
    if (!filteredApi && !cleanDbPokemons) return "No existe ese Pokemon en la base de datos"
    if (cleanDbPokemons.length) return [...filteredApi, ...cleanDbPokemons]

    return filteredApi
}

module.exports = findPokemonByQuery