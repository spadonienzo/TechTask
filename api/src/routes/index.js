const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemonRouter')
const typeRouter = require('./typeRouter')

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/pokemons', pokemonRouter)
mainRouter.use('/types', typeRouter)

module.exports = mainRouter;
