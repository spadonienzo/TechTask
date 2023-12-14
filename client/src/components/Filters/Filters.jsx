import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, filterByType, getPokemons, orderByName, orderByAttack, clearFilter, getTypes } from "../../redux/actions";
import './Filters.css'

const Filter = () => {

    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)

    useEffect(() => {
        if(!types.length) dispatch(getTypes())
    }, [dispatch, types])

    const handleOrderName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
    };

    const handleOrderAttack = (event) => {
        event.preventDefault();
        dispatch(orderByAttack(event.target.value))
    }

    const handleFilterType = (event) => {
        event.preventDefault();
        dispatch(filterByType(event.target.value))
    }

    const handleFilterOrigin = (event) => {
        event.preventDefault()
        dispatch(filterByOrigin(event.target.value))
    }

    const handleClear = (event) => {
        event.preventDefault()
        dispatch(getPokemons())
        dispatch(clearFilter())
    }

    return (
        <div className="filters">
            <button className="button-clear" onClick={handleClear}>Clear</button>
            <div>
                <h3>Filter By:</h3>
                <select className="selection" onChange={handleFilterOrigin}>
                    <option value="ALL">ALL</option>
                    <option value="API">API</option>
                    <option value="BDD">DATABASE</option>
                </select>
                <select className="selection" onChange={handleFilterType}>
                    <option value='ALL'>ALL</option>
                    {types?.map((type) => (
                        <option value={type.name} key={type.id}>{type.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <h3>Sort By:</h3>
                <select className="selection" onChange={handleOrderAttack}>
                    <option value="HIGH">HIGH</option>
                    <option value="LOW">LOW</option>
                </select>
                <select className="selection" onChange={handleOrderName}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
        </div>
    )
}

export default Filter