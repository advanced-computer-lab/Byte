import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import props from 'prop-types';
import {
  componentDidMount,
  Component,
  useState,
  useEffect,
  Fragment,
} from 'react';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Link } from 'react-router-dom';

var id;
var counter = 1;
function DepartureSearchResults() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [flight_clicked, setFlight] = useState([]);

    //store selected flight data
    const [flight_number, setNumber] = useState([]);
    const [flight_from, setFrom] = useState([]);
    const [flight_to, setTo] = useState([]);
    const [flight_date, setDate] = useState([]);
    const [flight_departure, setDeparture] = useState([]);
    const [flight_arrival, setArrival] = useState([]);
    const [flight_seats, setSeats] = useState([]);
    const [flight_class, setClass] = useState([]);

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    let search = window.location.search;
    // console.log("data in dep Flights" + search.split('=')[1]);
    // setData(search.split('=')[1]);
    //console.log(search);
    const currentCountry = search.split('=')[1].split(':')[0].split('%')[0];
    const destination = search.split('=')[2].split(':')[0].split('%')[0];
    const leavingDate = search.split('=')[3].split(':')[0].split('%')[0];
    const retDate = search.split('=')[4].split(':')[0].split('%')[0];
    const adults = search.split('=')[5].split(':')[0].split('%')[0];
    const children = search.split('=')[6].split(':')[0].split('%')[0];
    const classCh = search.split('=')[7].split(':')[0].split('%')[0];

    // const currentCountry = this.props.location.state.from;
    // const destination = props.location.state.to;
    // const leavingDate = props.location.state.depDate;
    // const retDate = props.location.state.returnDate;
    // const adults = props.location.state.adultNo;
    // const children = props.location.state.childrenNo;
    // //const infants = props.location.state.userId;
    // const classCh = props.location.state.classChosen;

    console.log('from ' + currentCountry);
    console.log('to ' + destination);
    console.log('depDate ' + leavingDate);
    console.log('returnDate ' + retDate);
    console.log('adultNo ' + adults);
    console.log('childrenNo ' + children);
    console.log('classChosen ' + classCh);

    axios({
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
        classChosen: classCh,
      },
    }).then((json) => setData(json.data));
    //console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:' + data);
  }, []);

  const returnigF = (n) => {
    console.log(n);
    setShow(false);
    axios({
      method: 'post',
      url: 'http://localhost:8000/departureResults',
      headers: {},
      data: {
        booking_number: n, // This is the body part
      },
    });
  };
  const [show, setShow] = useState(false);

  const renderSearch = (flight, index) => {
    return (
      <>
        <Card key={index + 1} className='box'>
          <Card.Body key={index + 1}>
            <Card.Title key={index + 3}>from: {flight.from}</Card.Title>
            <Card.Title key={index + 4}>to: {flight.to}</Card.Title>
            <Card.Title key={index + 6}>
              Arrival Time: {flight.arrival}
            </Card.Title>
            <Card.Title key={index + 6}>
              Departure Time: {flight.departure}
            </Card.Title>
            <Card.Title key={index + 6}>Class: {flight.cabinClass}</Card.Title>
            <Card.Title key={index + 5}>date: {flight.date}</Card.Title>
            <Card.Title key={index + 6}>Price: {flight.price}</Card.Title>
            <Button onClick={()=>{navigate(-1)}} key={index + 7} variant='outline-secondary'>
              Go back
            </Button>
            <Button key={index + 7} style={{marginLeft : "5px"}} variant='outline-success'
            onClick={() => {
                setShow(true);
                setFlight(flight._id);

                setNumber(flight.flightnumber);
                console.log(flight.flightnumber);
                setFrom(flight.from);
                setTo(flight.to);
                setDate(flight.date);
                setDeparture(flight.departure);
                setArrival(flight.arrival);
                setSeats(flight.seats);
                setClass(flight.cabinClass);
              }}>
                Make Reservation
            </Button>
          </Card.Body>
        </Card>

        {/* <Modal
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
            Are you sure you want to make reservation?
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
        </Modal> */}
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
                style={{ color: 'white' }}
                to={{
                  pathname: `/flightSummary`,
                  //search: `:id=${flight_clicked}`,
                  search: `:number: ${flight_number}
                  :from=${flight_from}
                  :to=${flight_to}
                  :date=${flight_date}
                  :departure=${flight_departure}
                  :arrival= ${flight_arrival}
                  :seats= ${flight_seats}
                  :number= ${flight_number}
                  :seats= ${flight_class}
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
        <h1>Search Result</h1>
      </div>
      {data.map(renderSearch)}
      {/* <Link to='' className='btn btn-primary'>
        Go to returning flights
      </Link> */}
    </>
  );
}

export default DepartureSearchResults;
