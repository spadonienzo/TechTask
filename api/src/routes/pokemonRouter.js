const { Router } = require("express");
const pokemonRouter = Router();

const getNamePokemon = require("../handlers/pokemonHandler/getNamePokemon");
const getIdPokemon = require("../handlers/pokemonHandler/getIdPokemon");

pokemonRouter.get("/", getNamePokemon);
pokemonRouter.get("/:id", getIdPokemon);

module.exports = pokemonRouter;
