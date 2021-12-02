import React,{useRef} from 'react'
import axios from 'axios'
import { Component, useState,useEffect } from 'react';
import './searchPage.css';
import DatePicker from "react-datepicker";

import {Link} from "react-router-dom";

function SearchFlight() {
    const [data, setData] = useState([]);
    
    const from=useRef();
    const to=useRef();
    const depDate= useRef();
    const returnDate= useRef();
    const adultNo= useRef();
    const childrenNo= useRef();
    const infantsNo= useRef();
    const classChosen= useRef();


    var currentCountry=" ";
    var destination=" ";
    var  leavingDate=" ";
    var  retDate=" ";
    var  adults=" ";
    var  children=" ";
    var infants=" ";
    var  classCh=" ";

function search() {
        console.log("class: " + (classCh));
      axios({
          url:'http://localhost:8000/search/search',
          method:'get',
          headers:{},
          params: {
          from:currentCountry,
          to:destination,
          depDate:leavingDate,
          returnDate: retDate,
          adultNo:adults,
          childrenNo:children,
          infantsNo:infants,
          classChosen:classCh
        },
      });

    };

    function searchButtonClicked(){
           currentCountry= from.current.value
           destination= to.current.value
           leavingDate= depDate.current.value
           retDate= returnDate.current.value
           adults= adultNo.current.value
           children= childrenNo.current.value
           infants= infantsNo.current.value
           classCh= classChosen.current.value
           //search();
           //window.location.href = "/departureResults";

          console.log(currentCountry)
          

    }

    return (
        <>
        <form >
        <h2 for="search Flight">Search Flight</h2>
        <label for="from">From</label>
        <input ref={from} id="from" label="from" variant="outlined" required onchange={{searchButtonClicked}}/><br></br>
        <label for="To">To</label>
        <input ref={to} id="to" label="to" variant="outlined" required /><br></br>
        <label for="departuredate">Departure Date</label>
        <input ref={depDate} id="depDate" label="Departure Date" variant="outlined" required onchange={{searchButtonClicked}} /><br></br>
        <label for="returndate">Return Date:</label>
        <input ref={returnDate}  id="returnDate" label="Return Date" variant="outlined" required onchange={{searchButtonClicked}}/><br></br>
        <label for="adultNo">Adult(s)</label>
        <input ref={adultNo} id="adultsNo" label="adult(s)" variant="outlined" required onchange={{searchButtonClicked}}/><br></br>
        <label for="childrenNo">child(ren)</label>
        <input ref={childrenNo} id="childrenNo" label="child(ren)" variant="outlined" required onchange={{searchButtonClicked}}/><br></br>
        <label for="infantNo">infant(s)</label>
        <input ref={infantsNo} id="infantsNo" label="infant(s)" variant="outlined" required onchange={{searchButtonClicked}}/><br></br>
        <label>
          Choose the Class:
          <select ref= { classChosen }name="class" id="class"> 
            <option value="0">First class</option>
            <option value="1">Business Class</option>
            <option value="2">Economy Class</option>
          </select>
        </label>
        <button className="button2" type="submit" onClick={searchButtonClicked}  >              
        <Link
        type="submit"
        component={Link}
        to={{
        pathname: `/DepartureSearchResults`,
        search: `:from=${currentCountry},
          :to=${destination},
          :depDate=${leavingDate},
          :returnDate= ${retDate},
          :adultNo=${adults},
          :childrenNo=${children},
          :infantsNo=${infants},
          :classChose=${classCh}` }}
        >
                Search
            </Link>
        </button>
        </form>



      </>
    );
  }
  
  export default SearchFlight;