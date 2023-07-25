const axios = require('axios')
const { Type } = require('../db')

const getTypes = async () => {
    try {
        
        let typesDB = await Type.findAll()
        if (!typesDB.length) {
            let ApiData = await axios.get(`https://pokeapi.co/api/v2/type`)
            let ApiTypes = ApiData.data.results.map((type) => {
                return {
                    name: type.name
                }
            })
            console.log(ApiTypes);
            Type.bulkCreate(ApiTypes)
            return await Type.findAll()

        } else {
            return typesDB
        }

    } catch (error) {
        throw Error `Error: ${error}`
    }
}

module.exports = getTypes