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
import ReservedFlights from './ReservedFlights';
import MyFlights from './myFlights';
import Home from './home';



function App() {
  return(
    <div>
    <Header />
     <Routes>
     <Route path='/' element={<Home />} />
        <Route path='/list' element={<FlightList />} />
        <Route path='/reserved' element={<ReservedFlights />} />
        <Route path='/myflights' element={<MyFlights />} />

       <Route path='/departure' element={<DepartureFlights />}/>
       <Route path='/arrival' element={<ArrivalFlights />}/>
       <Route path='/departureCabins' element={<DepartureCabins />}/>
       <Route path='/arrivalCabins' element={<ArrivalCabins />}/>

      
     </Routes>
     </div>
  )
}

export default App;
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import FlightList from './allFlights';


export default App;
