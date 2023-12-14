import React from 'react';
import "./Landing.css"
import { Link } from 'react-router-dom';
import logo from '../../resources/pokemonlogo.png'

const Landing = () => {
    return (
        <div className='background'>
          <div>
            <img src={logo} alt='logo' className='logo' />
            <div className='info'>
              <h1 className='title'>Welcome to the PokeApp</h1>
              <Link to='/home'>
                <button className='button'>ENTER</button>
              </Link>
            </div>
          </div>
        </div>
      );
}

export default Landing