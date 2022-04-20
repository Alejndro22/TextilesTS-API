import React from "react";
import { useState } from "react";
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import SideDrawe from "./components/SideDrawe";
  
function App() {
  const [sideToggle, setSideToggle] = useState(false)


  return (
    <Router>
      <NavBar click={() => setSideToggle(true)}/>
      <SideDrawe show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/products/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
