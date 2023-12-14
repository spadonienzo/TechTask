import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Form from './views/Form/Form'
import Detail from './views/Detail/Detail'


const App = () => {
  return(
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/home/:id' element={<Detail/>} />
        <Route exact path='/form' element={<Form/>} />
      </Routes>
    </div>
  )
}
export default App;
