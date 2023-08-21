import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { About } from './components/About';
import { Information } from './components/Information';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar.js';
import { Items1 } from './components/Items1';
function App(){
  return (
    <>
      <Navbar className="header"></Navbar>
      <Routes>
        {/* <Route exact path='/' element={<Home />}></Route>  */}
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/information' element={<Information />}></Route>
        <Route exact path='/' element={<AppHeader/>}></Route>
      </Routes>
    {/* <div className="App">
      <AppHeader/>
    </div> */}
    </>
  );
}

export default App;
