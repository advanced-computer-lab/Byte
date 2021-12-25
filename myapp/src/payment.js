import React from 'react';
import axios from 'axios';
import Stripe from 'react-stripe-checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './mycss.css';
import { useNavigate } from 'react-router';
import { CheckoutForm } from '@stripe/react-stripe-js';

const Payment = () => {
  const navigate = useNavigate();

  let search = window.location.search;
  console.log(search);
  const price = search.split('=')[1].split('%')[0];
  const selected_seats = search.split('=%20')[1].split('%')[0];
  const flight_number = search.split('=')[3].split('%')[0];
  const no_Of_Seats = search.split('=')[4].split('%')[0];
  const classV = search.split('=%20')[2].split('%')[0];

  console.log('price ' + price);
  console.log('selected_seats ' + selected_seats);
  console.log('flight_number ' + flight_number);
  console.log('noOfSeats ' + no_Of_Seats);
  console.log('classV ' + classV);

  const handleToken = (totalAmount, token) => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:8000/user/pay',
        headers: {
          authorization: window.localStorage.getItem('token'),
        },
        params: {
          selected: selected_seats,
          flight_number: flight_number,
          noOfSeats: no_Of_Seats,
          class: classV,
          amount: totalAmount,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const tokenHandler = (token) => {
    //we need to get this from url
    //..................................
    var amount = price;
    handleToken(amount, token);
  };

  return (
    <div className='center-screen'>
      <Stripe
        onSuccessfulResponse={(status) => {
          if (status === 'success') {
            navigate('/success');
          }
        }}
        stripeKey='pk_test_51K6CPuAyZ2iyoaqNmw4eyOQWi7LFCQoIQ2U6QhWoA9lW1cCxa28Zm5yQjjhbw5Mcx2kQCqUlrSeCphduxhflSSyM005r2QXw7u'
        token={tokenHandler}
      />
    </div>
  );
};

export default Payment;
