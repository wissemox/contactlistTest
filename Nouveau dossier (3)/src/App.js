import React,{useState} from 'react';
import logo from './logo.svg';

import axios from 'axios'
import './App.css';
import Navbar01 from './compent/NavBar';
import { BrowserRouter , Link , Route } from "react-router-dom";
import { Button } from 'reactstrap';
import ContactList from './compent/ContactList'
import Form01 from './compent/foruler'
function App() {

  return (
    <BrowserRouter>
    <Navbar01/>
    <div className="App">
  <Link to="/List">   <Button>Contact list</Button> </Link> 
  <Link to="/form">   <Button>Add Contact</Button> </Link> 
      <p>react app</p>
     
    </div>
    <Route exact path="/" render={()=><h1>Welcome</h1>}></Route>
    <Route path="/List" render={()=><ContactList  />}></Route>
    <Route path="/form" render={()=><Form01 />}></Route>
    </BrowserRouter>
  );
}

export default App;
