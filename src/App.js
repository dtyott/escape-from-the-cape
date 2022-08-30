import './App.css';


import { React, useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import IntroRoom from './rooms/IntroRoom';
import TreasureRoom from './rooms/TreasureRoom';
import Wonders from './rooms/WonderRoom';

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
        <Route exact path="/" element={IntroRoom()} />
        <Route path="/treasure" element={TreasureRoom()} />
        <Route path="/wonders" element={Wonders()} />



        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
