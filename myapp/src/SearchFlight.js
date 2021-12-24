import React, { useRef } from 'react';
import axios from 'axios';
import { Component, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import App from './App';

function SearchFlight() {
  const [data, setData] = useState([]);

  const from = useRef();
  const to = useRef();
  const depDate = useRef();
  const returnDate = useRef();
  const adultNo = useRef();
  const childrenNo = useRef();
  const infantsNo = useRef();
  const classChosen = useRef();

  const [currentCountry, setcurrentCountry] = useState([]);
  const [destination, setDestination] = useState([]);
  const [leavingDate, setLeavingDate] = useState([]);
  const [retDate, setRetDate] = useState([]);
  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([]);
  const [infants, setInfants] = useState([]);
  const [classCh, setClassCh] = useState([]);

  function search() {
    //console.log('class: ' + classCh);
    return axios({
      url: 'http://localhost:8000/search/departureResults',
      method: 'get',
      headers: {},
      params: {
        from: currentCountry,
        to: destination,
        depDate: leavingDate,
        returnDate: retDate,
        adultNo: adults,
        childrenNo: children,
        infantsNo: infants,
        classChosen: classCh,
      },
    });
  }

  function searchButtonClicked() {
    //currentCountry = from.current.value;
    setcurrentCountry(from.current.value);
    setDestination(to.current.value);
    setLeavingDate(depDate.current.value);
    setRetDate(returnDate.current.value);
    setAdults(adultNo.current.value);
    setChildren(childrenNo.current.value);
    setInfants(infantsNo.current.value);
    setClassCh(classChosen.current.value);
    // destination = to.current.value;
    // leavingDate = depDate.current.value;
    // retDate = returnDate.current.value;
    // adults = adultNo.current.value;
    // children = childrenNo.current.value;
    // infants = infantsNo.current.value;
    // classCh = classChosen.current.value;

    //let d = search();
    //console.log(d);
    //window.location.href = "/departureResults";

    console.log('searchButton: ' + currentCountry);
  }

  //console.log("search token? " + localStorage.getItem('token'))

  return (
    <>
      <form class='Container'>
        <h2 for='search Flight'>Search Flight</h2>
        <label for='from'>From</label>
        <input
          className='in'
          ref={from}
          id='from'
          label='from'
          variant='outlined'
          required
          onChange={searchButtonClicked}
        />
        <br></br>
        <label for='To'>To</label>
        <input
          className='in'
          ref={to}
          id='to'
          label='to'
          variant='outlined'
          required
        />
        <br></br>
        <label for='departuredate'>Departure Date</label>
        <input
          className='in'
          ref={depDate}
          id='depDate'
          label='Departure Date'
          variant='outlined'
          required
          onChange={searchButtonClicked}
        />
        <br></br>
        <label for='returndate'>Return Date:</label>
        <input
          className='in'
          ref={returnDate}
          id='returnDate'
          label='Return Date'
          variant='outlined'
          required
          onChange={searchButtonClicked}
        />
        <br></br>
        <label for='adultNo'>Adult(s)</label>
        <input
          className='in'
          ref={adultNo}
          id='adultsNo'
          label='adult(s)'
          variant='outlined'
          required
          onChange={searchButtonClicked}
        />
        <br></br>
        <label for='childrenNo'>child(ren)</label>
        <input
          className='in'
          ref={childrenNo}
          id='childrenNo'
          label='child(ren)'
          variant='outlined'
          required
          onChange={searchButtonClicked}
        />
        <br></br>
        <label for='infantNo'>infant(s)</label>
        <input
          className='in'
          ref={infantsNo}
          id='infantsNo'
          label='infant(s)'
          variant='outlined'
          required
          onChange={searchButtonClicked}
        />
        <br></br>
        <label>
          Choose the Class:
          <select ref={classChosen} className='in' name='class' id='class'>
            <option value='0'>First class</option>
            <option value='1'>Business Class</option>
            <option value='2'>Economy Class</option>
          </select>
        </label>
        <button className='b' type='submit'>
          <Link
            type='submit'
            component={Link}
            to={{
              pathname: '/departureResults',
              search: `:from=${currentCountry}
          :to=${destination}
          :depDate=${leavingDate}
          :returnDate= ${retDate}
          :adultNo=${adults}
          :childrenNo=${children}
          :infantsNo=${infants}
          :classChosen=${classCh}`,
            }}
          >
            Search
          </Link>
        </button>
      </form>
    </>
  );
}

export default SearchFlight;
