const axios = require('axios')
const {Pokemon, Type} = require('../db')
const dbHelper = require('../helpers/dbHelper')
const apiHelper = require('../helpers/apiHelper')

const getPokemons = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon`

    // DB
    
    let rawPokemonsDb = await Pokemon.findAll({
        include: [{model: Type}]})
        
    let cleanPokemonsDb = dbHelper(rawPokemonsDb)
       
    // API 
        
    let promisesPokemonsApi = []
    let rawPokemonsApi = []
    do {
        let dataApi = (await axios(url)) 
        promisesPokemonsApi = [
            ...promisesPokemonsApi,
            ...dataApi.data.results.map((pokemon) => {
                let data = axios(pokemon.url)
                return data
            })
        ]
        url = dataApi.data.next
    } while (url && promisesPokemonsApi.length < 150)
    
    await Promise.all(promisesPokemonsApi).then((response) =>
        response.map((element => rawPokemonsApi.push(element.data))))
    
    let cleanPokemonsApi = apiHelper(rawPokemonsApi)

    
    return  [...cleanPokemonsDb, ...cleanPokemonsApi]


    
}

module.exports = getPokemons