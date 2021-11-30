import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import FlightList from './allFlights';
import ReservedFlights from './ReservedFlights';
import MyFlights from './myFlights';
import Home from './home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<FlightList />} />
        <Route path='/reserved' element={<ReservedFlights />} />
        <Route path='/myflights' element={<MyFlights />} />
      </Routes>
    </div>
  );
}

export default App;
