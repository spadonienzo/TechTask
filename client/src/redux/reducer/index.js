import { GET_POKEMONS,GET_BY_NAME,GET_BY_ID,GET_TYPES,POST_POKEMON,ORDER_BY_NAME, ORDER_BY_ATTACK, FILTER_BY_TYPE, FILTER_BY_ORIGIN, CLEAR_FILTER, CLEAR_DETAIL } from '../actions/index'

let initialState = {
    pokemons: [],
    detail: [],
    types: [],
    allpokemons: [],
    currentPage: 1
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allpokemons: action.payload,
                pokemons: action.payload
            };
        
        case GET_BY_NAME:
            return{
                ...state,
                pokemons: action.payload
            }
        
        case GET_BY_ID:
            return{
                ...state,
                detail: action.payload
            };

        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            };

        case POST_POKEMON:
            return{
                ...state,
            }

        case ORDER_BY_NAME:
            let sortedArr = [...state.pokemons]
            sortedArr.sort((a, b) => {
                if(action.payload === 'A-Z'){
                    return a.name.localeCompare(b.name)
                } else if (action.payload === 'Z-A'){
                    return b.name.localeCompare(a.name)
                }
                return 0
            });
            return{
                ...state,
                pokemons: sortedArr
            };

        case ORDER_BY_ATTACK:
            let sortedArr1 = [...state.pokemons]
            sortedArr1.sort(function (a, b){
                const attack1 = Number(a.attack)
                const attack2 = Number(b.attack)

                if (action.payload === 'HIGH'){
                    return attack2 - attack1
                } else if (action.payload === 'LOW') {
                    return attack1 - attack2
                } else {
                    return 0
                }
            })
            return{
                ...state,
                pokemons: sortedArr1
            };
        
        case FILTER_BY_TYPE:
            let filteredTypes =
                action.payload === 'ALL'
                    ? state.allpokemons
                    : state.allpokemons.filter(pokemon => pokemon.types?.includes(action.payload))
                return {
                    ...state,
                    pokemons: filteredTypes
                }

        case FILTER_BY_ORIGIN:
            let filteredOrigin
            console.log(action.payload);
            if (action.payload === 'ALL') {
                filteredOrigin = state.allpokemons
            } else {
                filteredOrigin = 
                    action.payload === 'BDD'
                        ? state.allpokemons.filter(e => e.created)
                        : state.allpokemons.filter(e => !e.created)
            }
            console.log(filteredOrigin);
            return {
                ...state,
                pokemons: filteredOrigin
            }
        case CLEAR_FILTER:
            return {
                ...state,
                pokemons: state.allpokemons
            };

        case CLEAR_DETAIL:
            return {
                ...state,
                detail: []
            };

        default:
            return state
    }
}

export default rootReducer