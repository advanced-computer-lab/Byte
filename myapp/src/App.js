import { Component, UseState,UseEffect } from 'react';
import axios from 'axios'
//import Flight from '../../models/Flight';


function myapp() {
  const [flights, setflight] = UseState("");
  
  
  
  UseEffect(() => {
    axios.get("http://localhost:8000/controllers/flightcontroller")

    .then(res => {
      setflight(res.data)
    })

}, []);

return (
  <div className="">
    <div className="content">
      <h1>Flights updates</h1>
<div>
      {flights.map(flight=>

        <div className="row">

          <p > <b>From: {flight.From}</b> </p>
          <p > <b>To:{flight.To} </b></p>
          <p > <b>EconomySeatsAvailable: {flight.EconomySeatsAvailable}</b></p>
          <p > <b>BusinessSeatsAvailable: {flight.BusinessSeatsAvailable}</b></p>
          <p > <b>FirstSeatsAvailable: {flight.FirstSeatsAvailable}</b></p>
          <p > <b>FlightNumber: {flight.FlightNumber}</b></p>

        </div>

      )
    }

</div>


    </div>
  </div>

);
}
