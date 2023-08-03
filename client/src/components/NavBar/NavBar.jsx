import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import pokemonlogo from '../../resources/pokemonlogo.png'


const NavBar = () => {

    const location = useLocation()

    return(
        <div className="header">
        <Link  className="Link" to={"/home"}>
            <img src={pokemonlogo} alt="Logo" className="img-logo" />
        </Link>
        {location.pathname === '/home' ? (<SearchBar /> ): (<></>)}
        <ul>
            <Link className="Link" to={"/home"}>
            <li>
                <span>Home</span>
            </li>
            </Link>
            <Link className="Link" to={"/form"}>
            <li>
                <span>Create</span>
            </li>
            </Link>
            <Link className="Link" to={"/"}>
            <li>
                <span>Exit</span>
            </li>
            </Link>
        </ul>
        </div>
    )
}

export default NavBar
