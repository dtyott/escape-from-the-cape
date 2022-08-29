import './App.css';


import { React, useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import intro from './rooms/intro';
import treasure from './rooms/treasure';

const color_dict = [
  {"token":"treasure", "color":"gold"},
]
const default_color = "blue"

function App() {

  useEffect(() => {
    const url = window.location.href
    const possibleColors = color_dict.filter(d=>url.toLowerCase().includes(d.token))
    const color = possibleColors.length>0? possibleColors[0].color : default_color
    document.body.style = 'background: '+color+';';
    }, [])

  return (
    <Router>
      <div>
        
        <Routes>
        <Route exact path="/" element={intro()} />
        <Route path="/treasure" element={treasure()} />


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
