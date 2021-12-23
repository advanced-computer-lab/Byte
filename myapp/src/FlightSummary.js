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
import { Link } from 'react-router-dom';

function FlightSummary() {

   const [data, setData] = useState([]);

  const [flight_from, setFrom] = useState([]);
  const [flight_to, setTo] = useState([]);
  const [flight_date, setDate] = useState([]);
  const [flight_depart, setDeparture] = useState([]);
  const [flight_arrive, setArrival] = useState([]);

  useEffect(() => {
    let search = window.location.search;
    const from = (search.split("=")[1]).split("%")[0];
    const to = (search.split("=")[2]).split("%")[0];
    const date = (search.split("=")[3]).split("%")[0];
    const depart = (search.split("=")[4]).split("%")[0];
    const arrive = (search.split("=")[5]).split("%20")[1];

    setFrom(from);
    setTo(to);
    setDate(date);
    setDeparture(depart);
    setArrival(arrive);
    console.log("from " + flight_from);
    console.log("to " + flight_to);
    console.log("date " + flight_date);
    console.log("dep " + flight_depart);
    console.log("arr " + flight_arrive);



//     axios({
//         method: 'get',
//         //url: 'http://localhost:8000/flights/departureCabins',
//         headers: {},
//         // params: {
//         //   n: from, // This is the body part
//         // },
//       })
//       .then((json) => setData(json.data));
  });

  const [show, setShow] = useState(false);

  const renderFlightSummaryCard = (flight, index) => {
    // let search = window.location.search;
    // const from = (search.split("=")[1]).split("%")[0];
    // const to = (search.split("=")[2]).split("%")[0];
    // const date = (search.split("=")[3]).split("%")[0];
    // const depart = (search.split("=")[4]).split("%")[0];
    // const arrive = (search.split("=")[5]).split("%20")[1];

    // console.log("from " + from);
    // console.log("to " + to);
    // console.log("date " + date);
    // console.log("dep " + depart);
    // console.log("arr " + arrive);
  };
    return (
      <>
      <div key='initkey'>
        <h1>Flight Summary</h1>
      </div>
        <Card className='box'>
          <Card.Body>
            <Card.Title>From: {flight_from}</Card.Title>
            <Card.Title>To: {flight_to}</Card.Title>
            <Card.Title>Date: {flight_date}</Card.Title>
            <Card.Title>Departure: {flight_depart}</Card.Title>
            <Card.Title>Arrival: {flight_arrive}</Card.Title>
            
            <Button variant='outline-danger' onClick={() => {setShow(true);}}>
              Select Different Flight
            </Button>
            <Button variant='outline-danger' onClick={() => {setShow(true);}}>
              Proceed to Seat Picking
            </Button>
            {/* back to search/home page */}
           
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
            Are you sure you want to continue?
          </Modal.Body>
          <Modal.Footer>
          <Button variant='success' onClick={() => setShow(true)}>
              <Link
                component={Link}
                to={{
                  pathname: `/seats`,
                  //search: `:id=${cabin_id}`,
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
 

  // return (
  //   <>
  //     <div key='initkey'>
  //       <h1>Flight Summary</h1>
  //     </div>
  //     {/* {data.map(renderFlightSummaryCard)} */}
  //   </>
  // );
}

export default FlightSummary;
