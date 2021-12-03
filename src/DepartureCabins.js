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

function DepartureCabins() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let search = window.location.search;
    const id = search.split("=")[1];
    //console.log("axios " + id);
    axios({
        method: 'get',
        url: 'http://localhost:8000/flights/departureCabins',
        headers: {},
        params: {
          n: id, // This is the body part
        },
      })
      .then((json) => setData(json.data));
  });


  const [show, setShow] = useState(false);

  const renderDepartureCabinCard = (cabin, index) => {
    return (
      <>
        <Card key={cabin} className='box'>
          <Card.Body>
            <Card.Title>Class: {cabin.class}</Card.Title>
            <Card.Title>Seats: {cabin.seats}</Card.Title>
            <Card.Title>Price: {cabin.price}</Card.Title>
            

            <Button variant='outline-danger' onClick={() => setShow(true)}>
              Select Cabin
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
            Are you sure you want to select this cabin?
          </Modal.Body>
          <Modal.Footer>
            <Button variant='success' >
              Yes
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
        <h1>Departure Cabins</h1>
      </div>
      {data.map(renderDepartureCabinCard)}
    </Card>
  );
}

export default DepartureCabins;
