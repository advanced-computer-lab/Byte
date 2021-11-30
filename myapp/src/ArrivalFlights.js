import React from 'react';
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
import {Link} from "react-router-dom";

function ArrivalFlights() {
  const [data, setData] = useState([]);

  const [flight_clicked, setFlight] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/flights/arrival')
      .then((json) => setData(json.data));
  }, []);


  const [show, setShow] = useState(false);

  const renderArrivalCard = (flight, index) => {
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

            <Button variant='outline-danger' onClick={() => {setShow(true); setFlight(flight._id);}}>
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
          <Modal.Body>
            Are you sure you want to select this flight?
          </Modal.Body>
          <Modal.Footer>
          <Button variant='success' onClick={() => setShow(true)} >  
          <Link component={Link} to={{pathname: `/departureCabins`, search: `:id=${flight_clicked}`}}  >
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
        <h1>Arrival Flights</h1>
      </div>
      {data.map(renderArrivalCard)}
    </Card>
  );
}

export default ArrivalFlights;
