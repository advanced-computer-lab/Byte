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
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservedFlights() {
  const [booking_clicked, setBooking] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [showA, setShowA] = useState(false);

  const [flight_from, setFrom] = useState([]);
  const [flight_to, setTo] = useState([]);
  const [flight_date, setDate] = useState([]);
  const [flight_depart, setDeparture] = useState([]);
  const [flight_arrive, setArrival] = useState([]);
  const [flight_seats, setSeats] = useState([]);
  const [flight_number, setNumber] = useState([]);
  const [flight_class, setClass] = useState([]);

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/user/reservations',
      headers: { authorization: localStorage.getItem('token') },
    }).then((json) => setData(json.data));
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

  const handleSendEmail = () => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/user/sendIten',
      headers: { authorization: localStorage.getItem('token') },
    });
  };

  const [show, setShow] = useState(false);

  const renderCard = (flight, index) => {
    return (
      <>
        <Card key={index + 1} className='box'>
          <Card.Body key={index + 1}>
            <Card.Title key={index + 1}>
              Booking Number: {flight.bnumber}
            </Card.Title>
            <Card.Title key={index + 2}>
              Flight Number: {flight.fnumber}
            </Card.Title>
            <Card.Title key={index + 3}>from: {flight.from}</Card.Title>
            <Card.Title key={index + 4}>to: {flight.to}</Card.Title>

            <Card.Title key={index + 6}>
              Departure Time: {flight.departure}
            </Card.Title>
            <Card.Title key={index + 6}>
              Arrival Time: {flight.arrival}
            </Card.Title>
            <Card.Title key={index + 6}>
              Seats: {flight.seat_number.toString()}
            </Card.Title>
            <Card.Title key={index + 6}>Class: {flight.class}</Card.Title>
            <Card.Title key={index + 5}>date: {flight.date}</Card.Title>
            <Card.Title key={index + 6}>Price: {flight.price}</Card.Title>
            <Button
              key={index + 7}
              variant='outline-danger'
              onClick={() => {
                setShow(true);
                setBooking(flight.bnumber);
              }}
            >
              Cancel Reservation
            </Button>
            <Button
              key={index + 7}
              variant='outline-secondary'
              style={{ marginLeft: '10px' }}
              onClick={() => {
                setShow(true);
                //</Card.Body>setFlight(flight._id);

                setFrom(flight.from);
                setTo(flight.to);
                setDate(flight.date);
                setDeparture(flight.departure);
                setArrival(flight.arrival);
                setSeats(flight.seat_number);
                setNumber(flight.fnumber);
                setClass(flight.class);
              }}
              //navigate('/')
            >
              <Link
                component={Link}
                style={{ color: 'black' }}
                to={{
                  pathname: `/seats`,
                  //search: `:id=${cabin_id}`,
                  search: `
                :seats= ${30}
                  :from=${flight_from}
                  :to=${flight_to}
                  :date=${flight_date}
                  :class=${flight_class}
                  :number= ${flight_number}
                  :departure=${flight_depart}
                  :arrival= ${flight_arrive}
                  `,
                }}
              >
                Choose Another Seat
              </Link>
            </Button>
            <Button
              key={index + 7}
              style={{ marginLeft: '10px' }}
              variant='outline-secondary'
              onClick={() => {
                navigate('/');
              }}
            >
              Choose Another Flight
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
            Are you sure you want to cancel the reservation?
          </Modal.Body>
          <Modal.Footer key={index + 3}>
            <Button
              key={flight.bnumber}
              id={flight.bnumber}
              variant='success'
              onClick={(e) => {
                deleteHandler(booking_clicked);
                setShowA(true); //show toast
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
              <strong className='me-auto'>Deleted Successfully</strong>
            </Toast.Header>
            <Toast.Body>A confirmation email has been sent</Toast.Body>
          </Toast>
        </ToastContainer>
      </>
    );
  };

  return (
    <>
      <div key='initkey'>
        <h1>My Bookings</h1>
      </div>
      {data.map(renderCard)}
      <Button key={1111 + 1} variant='success' onClick={handleSendEmail}>
        Send My Itinerary as Email
      </Button>
    </>
  );
}

export default ReservedFlights;
