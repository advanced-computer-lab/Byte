import React from 'react'
import axios from 'axios'
import { Component, useState,useEffect } from 'react';
import './App.css';

function FlightList() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8000/flights/list').then(json => setData(json.data))
    },[]);
  
  
    return (
      
      <div class="container">      
         <div className="App">
         </div>

         <h1>All Flights</h1>
  
         <div>
           <br/>
  
           { data.map(flights => 
                     <ul class="card">
                         <li>Flight Number: {flights.number}</li>
                         <li>From: {flights.from}</li>
                         <li>To: {flights.to}</li>
                         <br></br>

                         <div>                    
                         <button class="button-25" >Update</button>
                         <button class="button-24"  name="con" id="con" onclick="return confirm('Are you sure you want to delete this item?');" > Delete</button>
                         </div>
                         
                         <br></br>
                     </ul>
  
            )  
           }
         </div>
      </div>
    );
  }
  
  export default FlightList;