import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Card from './Card';
import Footer from './Footer'
import Create from './Create';
import Nav from './Nav';



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
              <Route path="/Create" element = {<Create/>}/>
          </Routes>
        </Router>
        <Footer/>
    </div>
  )
}

export default Routers