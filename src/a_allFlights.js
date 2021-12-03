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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Flights() {
  //delete function vars
  const [flight_clicked, setFlight] = useState([]);
  //update function vars
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [date, setDate] = useState([]);
  const [arrival, setArrival] = useState([]);
  const [departure, setDeparture] = useState([]);
  const [duration, setDuration] = useState([]);
  const [bag_allowance, setBag] = useState([]);

  const [data, setData] = useState([]);

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    axios
      .get('http://localhost:8000/admin/list')
      .then((json) => setData(json.data));
  }, []);

  const deleteHandler = (n) => {
    //console.log("deleteHandle: (Flight Number) " + n);
    setShow(false);
    axios({
      method: 'post',
      url: 'http://localhost:8000/admin/delete',
      headers: {},
      data: {
        flight_number: n, // This is the body part
      },
    });
  };

  const updateHandler = () => {
    //console.log(n);
    setShow(false);
    axios({
      method: 'post',
      url: 'http://localhost:8000/admin/update',
      headers: {},
      data: {
        number: flight_clicked,
        from: from,
        to: to,
        date: date,
        arrival: arrival,
        departure: departure,
        duration: duration,
        bag_allowance: bag_allowance,
      },
    });
  };

  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const renderCard = (flight, index) => {
    return (
      <>
        <Card key={index + 1} className='box'>
          <Card.Body key={index + 1}>
            <Card.Title key={index + 1}>
              Flight Number: {flight.number}
            </Card.Title>
            <Card.Title key={index + 3}>From: {flight.from}</Card.Title>
            <Card.Title key={index + 4}>To: {flight.to}</Card.Title>
            <Card.Title key={index + 6}>
              Arrival Time: {flight.arrival}
            </Card.Title>
            <Card.Title key={index + 6}>
              Departure Time: {flight.departure}
            </Card.Title>
            <Card.Title key={index + 6}>
              Duration: {flight.duration.toString()}
            </Card.Title>
            <Card.Title key={index + 6}>
              Baggage Allowance: {flight.bag_allowance}
            </Card.Title>
            <Card.Title key={index + 5}>Date: {flight.date}</Card.Title>
            <Button
              key={index + 7}
              variant='outline-danger'
              onClick={() => {
                setShow(true);
                setFlight(flight.number);
              }}
            >
              Delete
            </Button>
            <Button
              key={index + 7}
              variant='outline-success'
              onClick={() => {
                setShow2(true);
                setFlight(flight.number);
              }}
            >
              Update
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
            <Modal.Title>Flight Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body key={index + 2}>
            Are you sure you want to delete this fight?
          </Modal.Body>
          <Modal.Footer key={index + 3}>
            <Button
              key={index}
              id={index}
              variant='success'
              onClick={(e) => {
                deleteHandler(flight_clicked);
                //setShowA(true); //show toast
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
        <Modal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={show2}
          key={index * 35}
        >
          <Modal.Header key={index + 1} closeButton>
            <Modal.Title>Update Flight Details</Modal.Title>
          </Modal.Header>
          <Modal.Body key={index + 2}>
            <Form>
              <FloatingLabel controlId='from' label='From' className='mb-3' onChange={e => {setFrom(e.target.value);}}>
                <Form.Control type='text' placeholder='From' required />
              </FloatingLabel>

              <FloatingLabel controlId='to' label='To' className='mb-3' onChange={e => {setTo(e.target.value);}}>
                <Form.Control type='text' placeholder='To' required />
              </FloatingLabel>

              <FloatingLabel controlId='date' label='Date' className='mb-3' onChange={e => {setDate(e.target.value);}}>
                <Form.Control type='text' placeholder='Date' required />
              </FloatingLabel>

              <FloatingLabel
                controlId='arrival'
                label='Arrival'
                className='mb-3'
                onChange={e => {setArrival(e.target.value);}}
              >
                <Form.Control type='text' placeholder='Arrival' required />
              </FloatingLabel>

              <FloatingLabel
                controlId='departure'
                label='Departure'
                className='mb-3'
                onChange={e => {setDeparture(e.target.value);}}
              >
                <Form.Control type='text' placeholder='Departure' required />
              </FloatingLabel>

              <FloatingLabel
                controlId='duration'
                label='Duration'
                className='mb-3'
                onChange={e => {setDuration(e.target.value);}}
              >
                <Form.Control type='text' placeholder='Duration' required />
              </FloatingLabel>

              <FloatingLabel
                controlId='bag'
                label='Bag Allowance'
                className='mb-3'
                onChange={e => {setBag(e.target.value);}}
              >
                <Form.Control
                  type='text'
                  placeholder='Bag Allowance'
                  required
                />
              </FloatingLabel>

              <Button
                type='submit'
                key={index}
                id={index}
                variant='success'
                onClick={(e) => {
                  updateHandler();
                  //setShow2(false);
                }}
              >
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer key={index + 3}>
            <Button
              key={index + 1}
              variant='danger'
              onClick={() => setShow2(false)}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <>
      <div key='initkey'>
        <h1>Admin - All Flights</h1>
      </div>
      {data.map(renderCard)}
    </>
  );
}

export default Flights;
