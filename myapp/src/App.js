import React from 'react';
import axios from 'axios'
import './App.css';
import { Component, useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './header';
import FlightList from './allFlights';

function App() {
  return(
    <div>
    <Header />
     <Routes>
       <Route path='/list' element={<FlightList />}/>
     </Routes>
     </div>
  )
}

export default App;