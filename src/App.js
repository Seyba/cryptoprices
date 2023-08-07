import {useState, useEffect} from "react";
import { Routes, Route} from 'react-router-dom'
import { Currencies } from "./pages/Currencies"
import { Main } from "./pages/Main"

import './App.css'
import { Price } from "./pages/Price";
import { Nav } from "./components/Nav";

export default function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div> 
  );
}