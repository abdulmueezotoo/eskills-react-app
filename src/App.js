import logo from './logo.svg';
import { useState } from 'react';
import React from "react";
import Home from "./Pages/Home";
import MovingDot from './components/MovingDot';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';



function App() {
  const token = localStorage.getItem("authToken");
  const config = {
    headers: {Authorization: `bearer ${token}`}
  };
  let [position, setPosition] = React.useState({x:0, y:0})
  return (
    <div className="App" onPointerMove={(e)=>{setPosition({x:e.clientX, y:e.clientY})}}> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
      <MovingDot position={position}/>
    </div>
  );
}

export default App;
