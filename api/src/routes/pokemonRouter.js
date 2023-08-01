const { Router } = require('express')
const pokemonRouter = Router()

const getNamePokemon = require('../handlers/pokemonHandler/getNamePokemon')
const getIdPokemon = require('../handlers/pokemonHandler/getIdPokemon')
const postPokemon = require('../handlers/pokemonHandler/postPokemon')

pokemonRouter.get('/', getNamePokemon)
pokemonRouter.get('/:id', getIdPokemon)
pokemonRouter.post('/', postPokemon)


module.exports = pokemonRouter