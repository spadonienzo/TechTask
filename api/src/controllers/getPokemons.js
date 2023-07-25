const axios = require('axios')
const {Pokemon, Type} = require('../db')
const apiHelper = require('../helpers/apiHelper')
const dbHelper = require('../helpers/dbHelper')

const getPokemons = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon`
    let rawPokemonsApi = []
    let cleanPokemonsApi = []
    
    do {
        let dataApi = (await axios(url)) 
        rawPokemonsApi = [
            ...rawPokemonsApi,
            ...dataApi.data.results.map((pokemon) => {
                let datos = axios(pokemon.url)
                return datos
            })
        ]
        url = dataApi.data.next
    } while (url && rawPokemonsApi.length < 150)
    
    await Promise.all(rawPokemonsApi).then((response) =>
        response.map((element) => {
            let pokemon = element.data
            let pokemonApi = {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types
                ? pokemon.types.map((el) => el.type.name)
                : "Unknown Type",
                img: pokemon.sprites.other.dream_world.front_default,
            }

            cleanPokemonsApi.push(pokemonApi)

        }))
    
        return cleanPokemonsApi

}

module.exports = getPokemons