import React from 'react'
import './SearchBar.css'
import { useState } from 'react'
import { getByName } from '../../redux/actions'
import {useDispatch} from 'react-redux'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchPokemon, setSearchPokemon] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        setSearchPokemon(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getByName(searchPokemon))
    }

    return (
        <div className='search-bar'>
            <form onChange={(event)=>handleChange(event)}>
                <input  type='search'/>
                <button className='button-submit' type='submit' onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar