import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

const url = "http://localhost:3001";

export const getPokemons = () => {
  return async function (distpach) {
    const response = await axios(`${url}/pokemons`);
    return distpach({
      type: "GET_POKEMONS",
      payload: response.data,
    });
  };
};

export const getByName = (name) => {
  return async function (distpach) {
    const response = await axios(`${url}/pokemons/?name=${name}`);
    return distpach({
      type: "GET_BY_NAME",
      payload: response.data,
    });
  };
};

export const getById = (id) => {
  return async function (distpach) {
    const response = await axios(`${url}/pokemons/${id}`);
    console.log("este es la response", response);
    return distpach({
      type: "GET_BY_ID",
      payload: response.data,
    });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const response = await axios(`${url}/types`);
    return dispatch({
      type: "GET_TYPES",
      payload: response.data,
    });
  };
};

export const orderByName = (value) => {
  return {
    type: ORDER_BY_NAME,
    payload: value,
  };
};

export const filterByType = (value) => {
  return {
    type: FILTER_BY_TYPE,
    payload: value,
  };
};

export const clearFilter = (value) => {
  return {
    type: CLEAR_FILTER,
    payload: value,
  };
};

export const clearDetail = (value) => {
  return {
    type: CLEAR_DETAIL,
    payload: value,
  };
};
