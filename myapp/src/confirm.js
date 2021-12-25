import React from 'react';
import axios from 'axios';
import './confirm.css';

function Confirm(){
return(
<html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div class="card">
        <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
          <i class="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>We received your purchase request;<br/> A confirmation email will be sent shortly!</p>
        </div>
      </body>
  </html>
  )
    }

    export default Confirm;