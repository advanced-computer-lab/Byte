import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import ReservedFlights from './ReservedFlights';
import MyFlights from './myFlights';
import Home from './home';
import Flights from './a_allFlights';
import AdminHome from './admin';
import CreateFlights from './a_createFlight';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserved' element={<ReservedFlights />} />
        <Route path='/myflights' element={<MyFlights />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/list' element={<Flights />} />
        <Route path='/admin/create' element={<CreateFlights />} />
        <Route path='/admin/search' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
