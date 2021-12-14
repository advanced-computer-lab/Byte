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
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyFlights() {
  const [booking_clicked, setBooking] = useState([]);

  const [data, setData] = useState([]);

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    axios
      .get('http://localhost:8000/user/reservations')
      .then((json) => setData(json.data));
  }, []);

  const deleteHandler = (n) => {
    console.log(n);
    setShow(false);
    axios({
      method: 'post',
      url: 'http://localhost:8000/user/cancelReservation',
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
        <Header />
        <Card key={index + 1} className='box'>
          <Card.Body key={index + 1}>
            <Card.Title key={index + 2}>
              Flight Number: {flight.fnumber}
            </Card.Title>
            <Card.Title key={index + 3}>from: {flight.from}</Card.Title>
            <Card.Title key={index + 4}>to: {flight.to}</Card.Title>
            <Card.Title key={index + 5}>date: {flight.date}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      <div key='initkey'>
        <h1>Reserved Flights</h1>
      </div>
      {data.map(renderCard)}
    </>
  );
}

export default MyFlights;
