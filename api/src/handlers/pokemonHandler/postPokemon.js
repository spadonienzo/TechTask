const createPokemon = require('../../controllers/createPokemon')

const postPokemon = async (req,res) => {
    const {name,image,life,attack,defense,speed,height,weight,Types} = req.body
    try {
        const newPokemon = await createPokemon({name,image,life,attack,defense,speed,height,weight,Types})
        res.status(200).json(newPokemon)
    } catch (error) {
        res.status(404).json({error: error.message})
        console.log((error.message));
    }
}

  module.exports = postPokemon