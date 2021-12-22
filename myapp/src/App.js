import React from 'react';
import axios from 'axios';
import './App.css';
import { Component, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import Header from './header';
import DepartureFlights from './DepartureFlights';
import ArrivalFlights from './ArrivalFlights';
import DepartureCabins from './DepartureCabins';
import ArrivalCabins from './ArrivalCabins';
import ReservedFlights from './ReservedFlights';
import MyFlights from './myFlights';
import Home from './home';
import Flights from './a_allFlights';
import AdminHome from './admin';
import CreateFlights from './a_createFlight';
import SearchFlight from './SearchFlight';
import DepartureSearchResults from './DepartureSearchResults';
import ReturnSearchResults from './ReturnSearchResults';
import data from './mock-data.json';
import ReadOnlyRow from './components/readonlyrow';
import EditableRow from './components/EditableRow';
import UserInfo from './components/userInfo';
import { Seats, Navigation } from './Component';
import {Page, Cart} from './UserSummary';


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

        <Route path='/search' element={<SearchFlight />} />
        <Route path='/departureResults' element={<DepartureSearchResults />} />
        <Route path='/returnResults' element={<ReturnSearchResults />} />

        <Route path='/departure' element={<DepartureFlights />} />
        <Route path='/arrival' element={<ArrivalFlights />} />
        <Route path='/departureCabins' element={<DepartureCabins />} />
        <Route path='/arrivalCabins' element={<ArrivalCabins />} />

        <Route path='/user' element={<UserInfo />} />

        <Route path='/seats' element={<Seats />} />
      </Routes>

      
    </div>
  );
}

export default App;
