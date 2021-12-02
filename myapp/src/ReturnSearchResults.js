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
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

var id;
var counter = 1;
function ReturnSearchResults() {

  const [data, setData] = useState([]);
  const [flight_clicked, setFlight] = useState([]);

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    axios
      .get('http://localhost:8000/returnResults')
      .then((json) => setData(json.data));
  }, []);

  

  const returnigF = (n) => {
    console.log(n);
    setShow(false);
    axios({
      method: 'post',
      url: 'http://localhost:8000/returnResults',
      headers: {},
      data: {
        booking_number: n, // This is the body part
      },
    });
  };
  const [show, setShow] = useState(false);

  const renderCard = (flight, index) => {
    return (
      <>
        <Card key={index + 1} className='box'>
          <Card.Body key={index + 1}>
            <Card.Title key={index + 2}>
              Flight Number: {flight.fnumber}
            </Card.Title>
            <Card.Title key={index + 3}>from: {flight.from}</Card.Title>
            <Card.Title key={index + 4}>to: {flight.to}</Card.Title>
            <Card.Title key={index + 6}>Arrival Time: {flight.arrival}</Card.Title>
            <Card.Title key={index + 6}>Departure Time: {flight.departure}</Card.Title>
            <Card.Title key={index + 6}>Seats: {flight.seat_number.toString()}</Card.Title>
            <Card.Title key={index + 6}>Class: {flight.class}</Card.Title>
            <Card.Title key={index + 5}>date: {flight.date}</Card.Title>
            <Card.Title key={index + 6}>Price: {flight.price}</Card.Title>
            <Button
              key={index + 7}
              variant='outline-danger'
            >
              make reservation
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
          key={index * 10}
        >
          <Modal.Header key={index + 1} closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body key={index + 2}>
            Are you sure you want to  make reservation?
          </Modal.Body>
          <Modal.Footer key={index + 3}>
            <Button
              key={flight.bnumber}
              id={flight.bnumber}
              variant='success'
              onClick={() => {
                setShowA(false); //show toast
              }}
            >
              Yes
            </Button>
            <Button
              key={index + 1}
              variant='danger'
              onClick={() => setShow(false)}
            >
              No
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer className='p-3' position='top-right'>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className='me-auto'>reservation made Successfully</strong>
            </Toast.Header>
          </Toast>
        </ToastContainer>
      </>
    );
  };

  return (
    <>
      <div key='initkey'>
        <h1>Returning Search Result Flights</h1>
      </div>
      {data.map(renderCard)}

    </>
  );
}

export default ReturnSearchResults;