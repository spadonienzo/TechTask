const { Pokemon, Type } = require('../db')

const createPokemon = async ({ name, image, life, attack, defense, speed, height, weight, Types }) => {

    const findTypes = await Type.findAll({where: {name: Types}})
    const newPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight })
    await newPokemon.addTypes(findTypes)
    return newPokemon
}

module.exports = createPokemon
