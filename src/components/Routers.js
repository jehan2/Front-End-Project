import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Card from './Card';
 import Nav from './Nav';
import Footer from './Footer'

function Routers() {
  return (
    <div>
        <Nav/>
        <Router>
          <Routes>  
              <Route exact path = "/" element = {<Home/>}/>    
              <Route path = "/Login" element = {<Login/>}/>
              <Route path = "/About" element = {<About/>}/>
              <Route path = "/Card" element = {<Card/>}/>
          </Routes>
        </Router>
        <Footer/>
    </div>
  )
}

export default Routers