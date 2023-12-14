const axios = require("axios");

const getTypes = async () => {
  let ApiData = await axios.get(`https://pokeapi.co/api/v2/type`);
  let ApiTypes = ApiData.data.results.map((type) => {
    return {
      name: type.name,
    };
  });
  return ApiTypes;
};

module.exports = getTypes;
