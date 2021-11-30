import React from 'react';
import axios from 'axios'
import './App.css';
import { Component, useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './header';
import FlightList from './allFlights';
import DepartureFlights from './DepartureFlights';
import ArrivalFlights from './ArrivalFlights';
import DepartureCabins from './DepartureCabins';
import ArrivalCabins from './ArrivalCabins';



function App() {
  return(
    <div>
    <Header />
     <Routes>
       <Route path='/list' element={<FlightList />}/>
       <Route path='/departure' element={<DepartureFlights />}/>
       <Route path='/arrival' element={<ArrivalFlights />}/>
       <Route path='/departureCabins' element={<DepartureCabins />}/>
       <Route path='/arrivalCabins' element={<ArrivalCabins />}/>
      
     </Routes>
     </div>
  )
}

export default App;