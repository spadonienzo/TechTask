import React, { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getById,clearDetail } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import './Detail.css'

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getById(id));
        dispatch(clearDetail())
        }, [dispatch, id]);

    if(detail.length){
        return(
            <div>
                <NavBar />
                    {detail.map(pokemon => (
                        <div key={pokemon.id} className="container">
                            <div className="title">
                                <span className="name">{pokemon.name.toUpperCase()}</span>
                            </div>
                            <div className="container_data">
                                <img src={pokemon.image} alt={pokemon.name} className="img"/>
                                <div class='ext-box'>
                                    <div class='int-box'>
                                        <p>Life: {pokemon.life}</p>
                                        <p>Attack: {pokemon.attack}</p>
                                        <p>Defense: {pokemon.defense}</p>
                                        <p>Speed: {pokemon.speed}</p>
                                        <p>Weight: {pokemon.weight}</p>
                                        <p>Height: {pokemon.height}</p>
                                        <p>Type:
                                            {pokemon.types?.map((t)=>(
                                                <li>{t.toUpperCase()}</li>
                                            ))}
                                        </p>
                                        {pokemon.Types?.map(type => <label>{type.name.toUpperCase()}</label>)}
                                    </div>
                                </div>
                            </div>
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