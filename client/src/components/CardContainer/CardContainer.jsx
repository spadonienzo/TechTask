import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({pokemons}) => {
    
    const pokemonsList = pokemons
    return(
        <div className='card-container'>
            {pokemonsList?.map(pokemon => 
            <Card pokemon = {pokemon} />)}
        </div>
    )
}

export default CardContainer