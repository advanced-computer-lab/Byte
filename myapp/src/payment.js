import React from 'react';
import axios from 'axios';
import Stripe from "react-stripe-checkout";
import './mycss.css';

const Payment = () => {
    const handleToken = (totalAmount, token)=>{
        try{
            axios({
                method: 'post',
                url: 'http://localhost:8000/user/isUserAuth',
                body:{
                    token: token.id,
                    amount: totalAmount
                }
              })

        } catch(error){
            console.log(error);
        };
    }

        const tokenHandler = (token) => {
            //we need to get this from url
            //..................................
            var amount = 100; 
            handleToken(amount,token);
        }
        return(
            <div className="center-screen">
                <Stripe 
                   stripeKey ="pk_test_51K6CPuAyZ2iyoaqNmw4eyOQWi7LFCQoIQ2U6QhWoA9lW1cCxa28Zm5yQjjhbw5Mcx2kQCqUlrSeCphduxhflSSyM005r2QXw7u"
                   token={tokenHandler}
                />
            </div>
        )
    
}

export default Payment;