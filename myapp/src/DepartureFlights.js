import React, { useRef } from 'react';
import axios from 'axios';
import {
  componentDidMount,
  Component,
  useState,
  useEffect,
  Fragment,
} from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

var id;
var counter = 1;
var flightData = '';

function DepartureFlights() {
  const [data, setData] = useState([]);

  const [flight_clicked, setFlight] = useState([]);

  //store selected flight data
  const [flight_number, setNumber] = useState([]);
  const [flight_from, setFrom] = useState([]);
  const [flight_to, setTo] = useState([]);
  const [flight_date, setDate] = useState([]);
  const [flight_departure, setDeparture] = useState([]);
  const [flight_arrival, setArrival] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/flights/departure')
      .then((json) => setData(json.data));
  }, []);

  const [show, setShow] = useState(false);

  const renderDepartureCard = (flight, index) => {
    //flightData += {flight.number} + {flight.from}+ {flight.to}+ {flight.date}+ {flight.departure}+ {flight.arrival};
    return (
      <>
        <Card key={flight} className='box'>
          <Card.Body>
            <Card.Title>Flight Number: {flight.number}</Card.Title>
            <Card.Title>From: {flight.from}</Card.Title>
            <Card.Title>To: {flight.to}</Card.Title>
            <Card.Title>Date: {flight.date}</Card.Title>
            <Card.Title>Departure: {flight.departure}</Card.Title>
            <Card.Title>Arrival: {flight.arrival}</Card.Title>
            <Card.Title>Duration: {flight.duration}</Card.Title>
            <Card.Title>Bag Allowance: {flight.bag_allowance}</Card.Title>

            <Button
              variant='outline-danger'
              onClick={() => {
                setShow(true);
                setFlight(flight._id);

                setNumber(flight.number);
                setFrom(flight.from);
                setTo(flight.to);
                setDate(flight.date);
                setDeparture(flight.departure);
                setArrival(flight.arrival);
              }}
            >
              Select Flight
            </Button>
          </Card.Body>
        </Card>

        <Modal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={show}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to select this flight?</Modal.Body>
          <Modal.Footer>
            <Button variant='success' onClick={() => setShow(true)}>
              <Link
                component={Link}
                to={{
                  pathname: `/flightSummary`,
                  //search: `:id=${flight_clicked}`,
                  search: `:number: ${flight_number}
                  :from=${flight_from}
                  :to=${flight_to}
                  :date=${flight_date}
                  :departure=${flight_departure}
                  :arrival= ${flight_arrival}
                  `
                }}
              >
                Yes
              </Link>
            </Button>
            <Button variant='danger' onClick={() => setShow(false)}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <Card style={{ height: '100%' }}>
      <div key='0'>
        <h1>Departure Flights</h1>
      </div>
      {data.map(renderDepartureCard)}
    </Card>
  );
}

export default DepartureFlights;