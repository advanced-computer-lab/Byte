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

function CreateFlights() {
  const [number, setNumber] = useState([]);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [date, setDate] = useState([]);
  const [arrival, setArrival] = useState([]);
  const [departure, setDeparture] = useState([]);
  const [duration, setDuration] = useState([]);
  const [bag_allowance, setBag] = useState([]);

  const createHandler = () => {
    console.log("handler");
    //setShow(false);
    axios({
      method: 'post',
      url: 'http://localhost:8000/admin/create',
      headers: {},
      data: {
        number: number,
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

  return (
    <>
      <h1>Admin - Create Flights</h1>
      <Form>
        <FloatingLabel
          controlId='number'
          label='Number'
          className='mb-3'
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='Number' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='from'
          label='From'
          className='mb-3'
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='From' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='to'
          label='To'
          className='mb-3'
          onChange={(e) => {
            setTo(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='To' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='date'
          label='Date'
          className='mb-3'
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='Date' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='arrival'
          label='Arrival'
          className='mb-3'
          onChange={(e) => {
            setArrival(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='Arrival' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='departure'
          label='Departure'
          className='mb-3'
          onChange={(e) => {
            setDeparture(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='Departure' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='duration'
          label='Duration'
          className='mb-3'
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='Duration' required />
        </FloatingLabel>

        <FloatingLabel
          controlId='bag'
          label='Bag Allowance'
          className='mb-3'
          onChange={(e) => {
            setBag(e.target.value);
          }}
        >
          <Form.Control type='text' placeholder='Bag Allowance' required />
        </FloatingLabel>

        <Button
          //type='submit'
          variant='outline-success'
          onClick={(e) => {
            createHandler();
          }}
        >
          Create
        </Button>
      </Form>
    </>
  );
}

export default CreateFlights;
