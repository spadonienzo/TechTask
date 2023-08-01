import { useEffect, useState } from "react"
import './Form.css'
import validate from "../../containers/validate"
import { useDispatch, useSelector } from 'react-redux'
import { getTypes ,postPokemon } from '../../redux/actions'
import NavBar from "../../components/NavBar/NavBar"

const Form = () => {
    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.types)
    const [input, setInput] = useState({
        name:'',
        image:'',
        life:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        Types:[]
    })

    const [error, setError] = useState({})

    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])

    const handleChange = (event) => {

        setInput({
            ...input,
            [event.target.name]:event.target.value})

        setError(
            validate({
                ...input,
                [event.target.name]:event.target.value
            }))
    }

    const handleSelect = (event) => {

        if(!input.Types.includes(event.target.value)){
            setInput({
                ...input,
                Types: [...input.Types, event.target.value]
            })}
    }

    const handleDelete = (event) => {
        setInput({
            ...input,
            Types: input.Types.filter((type) => type !== event)
        })
    }

    const handleSubmit = (event) => {
        try {
            if(Object.values(input).some((value) => value === '')){
                throw Error ('Please fill out all fields')
            }
            if(!input.Types.length) {
                return alert('Types must be selected')
            }
            event.preventDefault();
            dispatch(postPokemon(input))
            console.log('este es el input',input);
            setInput({
                name:'',
                image:'',
                life:'',
                attack:'',
                defense:'',
                speed:'',
                height:'',
                weight:'',
                Types:[]
            })
        } catch (error) {
            alert(error.message)
            console.log(error.message);
        }
    }

    return(
        <div>
            <NavBar />
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' name='name' value={input.name} onChange={handleChange}/>
                    {error.name && (<span style={{ color: "red" }}>{error.name}</span>)}
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type='text' name='image' value={input.image} onChange={handleChange}/>
                    {error.image && (<label style={{ color: "red" }}>{error.image}</label>)}
                </div>
                <div>
                    <label htmlFor="life">Life</label>
                    <input type='number' name='life' value={input.life} onChange={handleChange}/>
                    {error.life && (<label style={{ color: "red" }}>{error.life}</label>)}
                </div>
                <div>
                    <label htmlFor="attack">Attack</label>
                    <input type='number' name='attack' value={input.attack} onChange={handleChange}/>
                    {error.attack && (<label style={{ color: "red" }}>{error.attack}</label>)}
                </div>
                <div>
                    <label htmlFor="defense">Defense</label>
                    <input type='number' name='defense' value={input.defense} onChange={handleChange}/>
                    {error.defense && (<label style={{ color: "red" }}>{error.defense}</label>)}
                </div>
                <div>
                    <label htmlFor="speed">Speed</label>
                    <input type='number' name='speed' value={input.speed} onChange={handleChange}/>
                    {error.speed && (<label style={{ color: "red" }}>{error.speed}</label>)}
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type='number' name='height' value={input.height} onChange={handleChange}/>
                    {error.height && (<label style={{ color: "red" }}>{error.height}</label>)}
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type='number' name='weight' value={input.weight} onChange={handleChange}/>
                    {error.weight && (<label style={{ color: "red" }}>{error.weight}</label>)}
                </div>
                <div>
                    <select onChange={handleSelect}>
                        <option value='selected' hidden>Types</option>
                        {allTypes.map((type) => {
                            return (
                                <option value={type.name} key={type.id}>
                                    {type.name}    
                                </option>
                            )
                        })}
                    </select>
                    {input.Types.map((e) => {
                        return (
                            <ul key={e}>
                            <p>
                             <strong>{e}</strong>
                            </p>
                            <button onClick={() => handleDelete(e)}>X</button>
                            </ul>
                        );
                    })}
                    {/* {error.temperament && (<label style={{ color: "red" }}>{error.temperament}</label>)} */}
                </div>
                <div>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Form