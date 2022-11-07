import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Card from './Card';
import Nav from './Nav';

function Routers() {
  return (
    <div>
        <Nav/>
        <Routes>  
            <Route exact path = "/" element = {<Home/>}/>    
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/About" element = {<About/>}/>
            <Route path = "/Card" element = {<Card/>}/>
        </Routes>
    </div>
  )
}

export default Routers