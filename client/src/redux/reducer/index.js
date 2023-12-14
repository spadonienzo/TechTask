import {
  GET_POKEMONS,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPES,
  ORDER_BY_NAME,
  FILTER_BY_TYPE,
  CLEAR_FILTER,
  CLEAR_DETAIL,
} from "../actions/index";

let initialState = {
  pokemons: [],
  detail: [],
  types: [],
  allpokemons: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allpokemons: action.payload,
        pokemons: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case ORDER_BY_NAME:
      let sortedArr = [...state.pokemons];
      sortedArr.sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.name.localeCompare(b.name);
        } else if (action.payload === "Z-A") {
          return b.name.localeCompare(a.name);
        } else if (action.payload === "DEFAULT") {
          sortedArr = [...state.allpokemons];
          return;
        }
        return 0;
      });
      return {
        ...state,
        pokemons: sortedArr,
      };

    case FILTER_BY_TYPE:
      let filteredTypes =
        action.payload === "ALL"
          ? state.allpokemons
          : state.allpokemons.filter((pokemon) =>
              pokemon.types?.includes(action.payload)
            );
      return {
        ...state,
        pokemons: filteredTypes,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        pokemons: state.allpokemons,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };

    default:
      return state;
  }
};

export default rootReducer;
