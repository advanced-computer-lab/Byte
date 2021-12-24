import React, { Component } from 'react';
import { useState, useEffect, Fragment } from 'react';
import SeatPicker from 'react-seat-picker';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
//vars needed for summary
var noOfSeats = 0;
var cost = 0;
var totalPrice = noOfSeats * cost;
var seatsSelected = '';

// flightid|| booked
//cost
//noofseats
//choosen seats
//cabin class,links data  ----> sea

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Flight Details</Card.Title>
    <Card.Text> Flight Number : </Card.Text>
    <Card.Text> From : </Card.Text>
    <Card.Text> TO : </Card.Text>
    <Card.Text> Class : </Card.Text>
    <Card.Link href='#'>Back</Card.Link>
  </Card.Body>
</Card>;

function swwitch(num) {
  switch (true) {
    case num == 60:
      cost = 80;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 80$' },
          { id: 6, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 80$' },
          { id: 12, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 80$' },
          { id: 14, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 80$' },
          { id: 18, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 19, number: 1, tooltip: 'Cost: 80$' },
          { id: 20, number: 2, tooltip: 'Cost: 80$' },
          null,
          { id: 21, number: 3, orientation: 'east', tooltip: 'Cost: 80$' },
          { id: 22, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 23, number: 5, tooltip: 'Cost: 80$' },
          { id: 24, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 25, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 26, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 27, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 28, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 29, number: 5, tooltip: 'Cost: 80$' },
          { id: 30, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 31, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 32, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 33, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 34, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 35, number: 5, tooltip: 'Cost: 80$', tooltip: 'Cost: 80$' },
          { id: 36, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 37,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Mr.Bugs Bunny',
          },
          {
            id: 38,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For Mrs.Lola Buny',
          },
          null,
          {
            id: 39,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 40, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 41, number: 5, tooltip: 'Cost: 80$' },
          { id: 42, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 43, number: 1, isReserved: false, tooltip: 'Cost: 80$ ' },
          { id: 44, number: 2, isReserved: false, tooltip: 'Cost: 80$' },
          null,
          {
            id: 45,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 46, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 47, number: 5 },
          { id: 48, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 49, number: 1, tooltip: 'Cost: 80$' },
          { id: 50, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 51,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 52, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 53, number: 5, tooltip: 'Cost: 80$' },
          { id: 54, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 55, number: 1, tooltip: 'Cost: 80$' },
          { id: 56, number: 2, tooltip: 'Cost: 80$' },
          null,
          { id: 57, number: 3, orientation: 'east', tooltip: 'Cost: 80$' },
          { id: 58, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 58, number: 5, tooltip: 'Cost: 80$' },
          { id: 59, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          null,
          null,
          null,
          null,
          { id: 60, number: '1', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          null,
          null,
        ],
      ];

    case num == 50:
      cost = 80;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 80$' },
          { id: 6, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 80$' },
          { id: 12, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 80$' },
          { id: 14, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 80$' },
          { id: 18, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 19, number: 1, tooltip: 'Cost: 80$' },
          { id: 20, number: 2, tooltip: 'Cost: 80$' },
          null,
          { id: 21, number: 3, orientation: 'east', tooltip: 'Cost: 80$' },
          { id: 22, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 23, number: 5, tooltip: 'Cost: 80$' },
          { id: 24, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 25, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 26, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 27, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 28, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 29, number: 5, tooltip: 'Cost: 80$' },
          { id: 30, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 31, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 32, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 33, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 34, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 35, number: 5, tooltip: 'Cost: 80$', tooltip: 'Cost: 80$' },
          { id: 36, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 37,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Mr.Bugs Bunny',
          },
          {
            id: 38,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For Mrs.Lola Buny',
          },
          null,
          {
            id: 39,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 40, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 41, number: 5, tooltip: 'Cost: 80$' },
          { id: 42, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 43, number: 1, isReserved: false, tooltip: 'Reserved ' },
          { id: 44, number: 2, isReserved: false, tooltip: 'Cost: 80$' },
          null,
          {
            id: 45,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 46, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 47, number: 5, tooltip: 'Cost: 80$' },
          { id: 48, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          null,
          null,
          null,
          { id: 49, number: 3, tooltip: 'Cost: 80$' },
          { id: 50, number: 4, tooltip: 'Cost: 80$' },
          null,
          null,
        ],
      ];

    case num == 43:
      cost = 80;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 80$' },
          { id: 6, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 80$' },
          { id: 12, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 80$' },
          { id: 14, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 80$' },
          { id: 18, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 19, number: 1, tooltip: 'Cost: 80$' },
          { id: 20, number: 2, tooltip: 'Cost: 80$' },
          null,
          { id: 21, number: 3, orientation: 'east', tooltip: 'Cost: 80$' },
          { id: 22, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 23, number: 5, tooltip: 'Cost: 80$' },
          { id: 24, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 25, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 26, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 27, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 28, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 29, number: 5, tooltip: 'Cost: 80$' },
          { id: 30, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 31, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 32, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 33, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 34, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 35, number: 5, tooltip: 'Cost: 80$', tooltip: 'Cost: 80$' },
          { id: 36, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 37,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Mr.Bugs Bunny',
          },
          {
            id: 38,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For Mrs.Lola Buny',
          },
          null,
          {
            id: 39,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 40, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 41, number: 5, tooltip: 'Cost: 80$' },
          { id: 42, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          null,
          null,
          null,
          { id: 43, number: 3, tooltip: 'Cost: 80$' },
          null,
          null,
          null,
        ],
      ];

    case num == 30:
      cost = 80;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 80$' },
          { id: 6, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 80$' },
          { id: 12, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 80$' },
          { id: 14, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 80$' },
          { id: 18, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 19, number: 1, tooltip: 'Cost: 80$' },
          { id: 20, number: 2, tooltip: 'Cost: 80$' },
          null,
          { id: 21, number: 3, orientation: 'east', tooltip: 'Cost: 80$' },
          { id: 22, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 23, number: 5, tooltip: 'Cost: 80$' },
          { id: 24, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 25, number: 1, isReserved: false, tooltip: 'Cost: 80$' },
          { id: 26, number: 2, orientation: 'east', tooltip: 'Cost: 80$' },
          null,
          { id: 27, number: '3', isReserved: false, tooltip: 'Cost: 80$' },
          { id: 28, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 29, number: 5, tooltip: 'Cost: 80$' },
          { id: 30, number: 6, isReserved: false, tooltip: 'Cost: 80$' },
        ],
      ];

    case num == 26:
      cost = 150;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 150$' },
          { id: 6, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 150$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 150$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 150$' },
          { id: 12, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 150$' },
          { id: 14, number: 2, tooltip: 'Cost: 150$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 150$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 150$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 150$' },
          { id: 18, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          { id: 19, number: 1, tooltip: 'Cost: 150$' },
          { id: 20, number: 2, tooltip: 'Cost: 150$' },
          null,
          { id: 21, number: 3, orientation: 'east', tooltip: 'Cost: 150$' },
          { id: 22, number: '4', orientation: 'west', tooltip: 'Cost: 150$' },
          null,
          { id: 23, number: 5, tooltip: 'Cost: 150$' },
          { id: 24, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          null,
          null,
          null,
          { id: 25, number: 3, isReserved: false, tooltip: 'Cost: 150$' },
          { id: 26, number: 4, orientation: 'east', tooltip: 'Cost: 150$' },
        ],
      ];

    case num == 22:
      cost = 80;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 80$' },
          { id: 6, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 80$' },
          { id: 12, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 80$' },
          { id: 14, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 80$' },
          { id: 18, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 19, number: 1, tooltip: 'Cost: 80$' },
          { id: 20, number: 2, tooltip: 'Cost: 80$' },
          null,
          null,
          null,
          null,
          { id: 21, number: 5, orientation: 'east', tooltip: 'Cost: 80$' },
          { id: 22, number: '6', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
        ],
      ];

    case num == 20:
      cost = 80;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 80$' },
          { id: 6, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 80$' },
          { id: 12, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 80$' },
          { id: 14, number: 2, tooltip: 'Cost: 80$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 80$',
          },
          { id: 16, number: '4', orientation: 'west', tooltip: 'Cost: 80$' },
          null,
          { id: 17, number: 5, tooltip: 'Cost: 80$' },
          { id: 18, number: 6, tooltip: 'Cost: 80$' },
        ],
        [
          null,
          null,
          null,
          { id: 19, number: 3, tooltip: 'Cost: 80$' },
          { id: 20, number: 4, tooltip: 'Cost: 80$' },
        ],
      ];

    case num == 16:
      cost = 200;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 200$' },
          { id: 6, number: 6, tooltip: 'Cost: 200$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 200$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 200$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 200$' },
          { id: 12, number: 6, tooltip: 'Cost: 200$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 200$' },
          { id: 14, number: 2, tooltip: 'Cost: 200$' },
          null,
          null,
          null,
          null,
          {
            id: 15,
            number: 5,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 200$',
          },
          { id: 16, number: '6', orientation: 'west', tooltip: 'Cost: 200$' },
        ],
      ];

    case num == 15:
      cost = 150;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 150$' },
          { id: 6, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 150$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 150$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 150$' },
          { id: 12, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          { id: 13, number: 1, tooltip: 'Cost: 150$' },
          { id: 14, number: 2, tooltip: 'Cost: 150$' },
          null,
          {
            id: 15,
            number: 3,
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 150$',
          },
        ],
      ];

    case num == 13:
      cost = 150;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 150$' },
          { id: 6, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          {
            id: 9,
            number: '3',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 150$',
          },
          { id: 10, number: '4', orientation: 'west', tooltip: 'Cost: 150$' },
          null,
          { id: 11, number: 5, tooltip: 'Cost: 150$' },
          { id: 12, number: 6, tooltip: 'Cost: 150$' },
        ],
        [null, null, null, { id: 13, number: 3, tooltip: 'Cost: 150$' }],
      ];

    case num == 10:
      cost = 150;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 150$' },
          { id: 6, number: 6, tooltip: 'Cost: 150$' },
        ],
        [
          {
            id: 7,
            number: 1,
            isReserved: true,
            tooltip: 'Reserved For Sherlock holmes',
          },
          {
            id: 8,
            number: 2,
            isReserved: true,
            tooltip: 'Reserved For John H. Watson',
          },
          null,
          null,
          null,
          null,
          {
            id: 9,
            number: '5',
            isReserved: false,
            orientation: 'east',
            tooltip: 'Cost: 150$',
          },
          { id: 10, number: '6', orientation: 'west', tooltip: 'Cost: 150$' },
          null,
        ],
      ];

    case num == 6:
      cost = 200;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          { id: 5, number: 5, tooltip: 'Cost: 200$' },
          { id: 6, number: 6, tooltip: 'Cost: 200$' },
        ],
      ];

    case num == 5:
      cost = 200;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          { id: 2, number: 2, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
          {
            id: 4,
            number: '4',
            isReserved: true,
            orientation: 'west',
            tooltip: 'Reserved by Daisy Duck',
          },
          null,
          null,
          { id: 5, number: 6, tooltip: 'Cost: 200$' },
        ],
      ];

    case num == 3:
      cost = 200;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          null,
          { id: 2, number: 2, isReserved: true, tooltip: 'Cost :200$' },
          null,
          null,
          null,
          {
            id: 3,
            number: '3',
            isReserved: true,
            orientation: 'east',
            tooltip: 'Reserved by Donald Duck',
          },
        ],
      ];

    case num == 2:
      cost = 200;
      return [
        [
          { id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA' },
          null,
          null,
          null,
          null,
          { id: 2, number: 6, tooltip: 'Cost: 200$' },
        ],
      ];

    default:
      cost = 200;
      return [
        [null, null, null, null, { id: 1, number: 1, tooltip: 'Cost: 200$' }],
      ];
  }
}

function booked(bookedseat, row) {
  var k = 0;
  //  //for (var k = 0 ;k < bookedseat.length;k++) {
  while (k < bookedseat.length) {
    for (var i = 0; i < row.length; i++) {
      var cube = row[i];
      for (var j = 0; j < cube.length; j++) {
        if (row[i][j] == null) continue;
        else if (row[i][j].id == bookedseat[k]) {
          // //
          // //        console.log(null)
          // //        console.log("out of nul")
          // //        var n = row[i][j].id
          // //         console.log (row[i][j].id,'row[i][j].id')
          // //        console.log(n,"n");
          // //        console.log(typeof bookedseat[k] ,"typeof bookedseat[k] ")
          // //        if (n==bookedseat[k]){
          row[i][j].isReserved = true;
          row[i][j].tooltip = 'Resesrved';
          k++;
        }
      }
    }
  }
}
//   // for (var i = 0 ; i < bookedseat.length ; i++ ){
//   //   const seatindex= row.findIndex( seat =>{return seat.id == bookedseat[i] } )
//   //   row[1] ={isReserved : false}
//   //   for (j=0;j<8;j++)
//   //   }

//   // return row

//}
// function Redirect() {
//   let navigate = useNavigate();
//   function handleClick() {
//    const toSeatssum=()=>{ navigate('/Seatssum',{state:{id : {flight_clicked}, number: {flight_number},to : {flight_to} , date:{flight_date} ,departure:{flight_departure},arrival:{flight_arrival}}}) }
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Book</button>
//     </div>
//   );
// }

class Seats extends React.Component {
  state = {
    loading: false,
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        //in addSeatsCallBack
        seatsSelected += ` Seat ${number}, row ${row}, id ${id}, `;
        noOfSeats += 1;
        console.log(seatsSelected);
        console.log(noOfSeats);

        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };
  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 750));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    let search = window.location.search;
    const num = search.split('=')[1];
    var id = [8, 9, 10, 12, 13, 20];
    var rows = swwitch(num);
    var rowss = booked(id, rows);
    console.log(rows[1]);
    console.log(typeof rows[1][1].id, 'typeof rows[1][1].id');
    console.log(rows[1][1].id, 'rows[1][1].id');
    console.log((rows[1][1].isReserved = true), 'rows[1][1].isReserved=false');
    console.log(rows[1][1].isReserved, 'rows[1][1].isReserved');
    const { loading } = this.state;
    return (
      <div>
        <h1 style={{ marginLeft: '40px' }}>Seat Picker</h1>
        <div
          style={{
            marginTop: '50px',
            marginLeft: '40px',
            marginBottom: '10px',
          }}
        >
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
        <h1 style={{ marginLeft: '40px' }}>Seat Picker Return Flight </h1>
        <div style={{ marginTop: '50px', marginLeft: '40px' }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div>

        {/* <button style={{ marginLeft: '40px' }} className='btn btn-success m-2'>
          {/* <Link
                component={Link}
                to={{
                  pathname:` /flightSummary`,
                  //search: :id=${flight_clicked},
                  search: `:number: ${flight_number}
                  :from=${flight_from}
                  :to=${flight_to}
                  :date=${flight_date}
                  :departure=${flight_departure}
                  :arrival= ${flight_arrival}`
                  
                }}
              >
                Book
              </Link> */}
        {/* Book
        </button> */}

        <div
          class='position-static'
          style={{ float: 'right', marginTop: '-358px', marginRight: '40px' }}
        >
          <Card bg='light' border='info ' style={{ width: '18rem' }}>
            <Card.Header>Flight Details</Card.Header>
            <Card.Body>
              <Card.Text> Flight Number : </Card.Text>
              <Card.Text> From : </Card.Text>
              <Card.Text> TO : </Card.Text>
              <Card.Text> Class : </Card.Text>
              <Card.Text> No Of Seats : </Card.Text>
              <Card.Text> Total : </Card.Text>
              <Card.Link href='#'>Back</Card.Link>
              <button
                style={{ marginLeft: '80px' }}
                className='btn btn-success '
              >
                Book
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Seats;
