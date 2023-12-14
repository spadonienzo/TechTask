import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({pokemon}) => {
    const {id,name,image,types,Types} = pokemon

    
    let array = []
    let newArray = []
    if(Types){
        Types.map(type => {
            return array.push(type.name)
        })
    }
    newArray = array.join(' - ').toUpperCase()

    return(
        <div className='card'>
            <Link to={`/home/${id}`}>
                <img src={image} alt={name} className='image'/>
            </Link>
            <p>{name[0].toUpperCase() + name.slice(1)}</p>
            {newArray ? <p>{newArray}</p> : <p>{types.join(' - ').toUpperCase()}</p>}
        </div>
    )
}

export default Card