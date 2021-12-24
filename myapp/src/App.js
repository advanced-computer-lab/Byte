import React from 'react';
import axios from 'axios';
import './App.css';
import { Component, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import DepartureFlights from './DepartureFlights';
import ArrivalFlights from './ArrivalFlights';
import DepartureCabins from './DepartureCabins';
import ArrivalCabins from './ArrivalCabins';
import ReservedFlights from './ReservedFlights';
import MyFlights from './myFlights';
import Home from './home';
import Payment from './payment';
import Flights from './a_allFlights';
import AdminHome from './admin';
import CreateFlights from './a_createFlight';
import SearchFlight from './SearchFlight';
import DepartureSearchResults from './DepartureSearchResults';
import ReturnSearchResults from './ReturnSearchResults';
import Login from './login';
import Password from './changePass';
import Register from './register';
import data from './mock-data.json';
import ReadOnlyRow from './components/readonlyrow';
import EditableRow from './components/EditableRow';
import UserInfo from './components/userInfo';
import { Seats, Navigation } from './Component';
import UserInput from './UserInput';
import FlightSummary from './FlightSummary';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path='/' element={user && user._id ? <Home /> : <Login />} />
        <Route
          path='/reserved'
          element={user && user._id ? <ReservedFlights /> : <Login />}
        />
        <Route
          path='/myflights'
          element={user && user._id ? <MyFlights /> : <Login />}
        /> */}

        <Route path='/reserved' element={<ReservedFlights />} />
        <Route path='/myflights' element={<MyFlights />} />
        <Route path='/' element={<SearchFlight />} />

        <Route path='/changePass' element={<Password />} />

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

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/pay' element={<Payment />} />

        <Route path='/userInput' element={<UserInput />} />
        <Route path='/flightSummary' element={<FlightSummary />} />
      </Routes>
    </div>
  );
}

export default App;
