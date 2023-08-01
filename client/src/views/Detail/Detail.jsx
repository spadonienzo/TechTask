import React, { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getById } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getById(id));
        }, [dispatch, id]);

    if(detail.length){
        return(
            <div>
            <NavBar />
            {detail.map(pokemon => (
                <div key={pokemon.id}>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>Life: {pokemon.life}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
                    <p>Speed: {pokemon.speed}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                    <p>Type: {pokemon.types.join(' - ').toUpperCase()}</p>
                    {pokemon.Types?.map(type => <label>Type: {type.name.join(' - ').toUpperCase()[0]}, </label>)}
                </div>
            ))}            
        </div>
        )
    }else{
        return(
            <h1 className="loading">LOADING ...</h1>
    )}
}

export default Detail