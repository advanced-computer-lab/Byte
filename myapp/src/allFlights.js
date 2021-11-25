import React from 'react'
import Header from './header';
import axios from 'axios'
import { Component, useState,useEffect } from 'react';
import './App.css';

function FlightList() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8000/flights/list').then(json => setData(json.data))
    },[]);
  
    console.log("fffffff");
  
    return (
      <div>
         <div className="App">
         </div>
  
         <div>
           <br/>
  
           { data.map(flights => 
                     <ul>
                         <li>Flight Number: {flights.number}</li>
                         <li>From: {flights.from}</li>
                         <li>To: {flights.to}</li>
                         <br></br>
                        
                         <button style={{color: "green",}}>Update</button>
  
                         <button style={{color: "red",}} name="con" id="con" onclick="return confirm('Are you sure you want to delete this item?');" > Delete</button>
  
                         <hr></hr><br></br>
                     </ul>
  
            )  
           }
         </div>
      </div>
    );
  }
  
  export default FlightList;