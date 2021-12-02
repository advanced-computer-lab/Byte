import React from 'react';
import axios from 'axios'
//import './App.css';
import './searchPage.css';
import { Component, useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './header';
import FlightList from './allFlights';
import SearchFlight from './SearchFlight';
import DepartureSearchResults from './DepartureSearchResults';
import ReturnSearchResults from './ReturnSearchResults';



function App() {
  return(
    <>
    
     <Routes>

       <Route path='/list' element={<FlightList />}/>
       <Route path='/search' element={<SearchFlight />}/>
       <Route path='/departureResults' element={< DepartureSearchResults/>}/>
       <Route path='/returnResults' element={< ReturnSearchResults/>}/>

     </Routes>
     </>
  )
}


export default App;