const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const User = require('../models/user.js');
const Booking = require('../models/Booking.js');
const Flight = require('../models/flight.js');
const Cabin = require('../models/cabin.js');
const { Template } = require('ejs');

//returns all users in database
const getAllUsers = (req, res) => {
  User.find({}).then((result) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
  });
};

//returns all reservations of a user
async function getAllReservations(req, res) {
  //we need to get user here
  var user = 'dinah';

  var output = [];

  //get user id
  var uID;
  await User.find({ username: user }).then((result) => {
    uID = result[0]._id;
  });

  //get bookings of user
  var results;
  await Booking.find({ userID: uID }).then((result) => {
    results = result;
  });

  //get flights of bookings
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
    //console.log("rr "+results[i]);
    var t = {
      bnumber: 0,
      fnumber: 0,
      from: '',
      to: '',
      date: '',
      price: '',
      departure: '',
      arrival: '',
      class: '',
      seat_number: [0]
    };
    t.bnumber = results[i].number;
    t.price = results[i].price;
    t.seat_number = results[i].chosen_seats;

      await Cabin.find({ _id: results[i].cabinID.toString() }).then((resultsz) => {
        //console.log(resultsz);
        if(resultsz[0].class == 0){
          t.class = "First";
        } else{
          if(resultsz[0].class == 1){
            t.class = "Buisness";
          } else{
            if(resultsz[0].class == 2){
                t.class = "Economy";
            }
          }
        }
      });

      //console.log(results[i].class)

    await Flight.find({ _id: results[i].flightID }).then((resultss) => {
      t.fnumber = resultss[0].number;
      t.from = resultss[0].from;
      t.to = resultss[0].to;
      t.date = resultss[0].date;
      t.arrival = resultss[0].arrival;
      t.departure = resultss[0].departure;
      output.push(t);
    });
  }

  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(output, null, 4));
}

//cancel a reservation
const cancelReservation = (req, res) => {
  var bnumber = req.body.booking_number;
  //console.log("backend: ");
  //console.log(bnumber);
  //var bnumber = 3;


  sendCancellationMail(bnumber);

  Booking.remove({ number: bnumber }, function (err) {});

};

//sends the user his cancelled flight details
async function sendCancellationMail(booking_number){
  //get user's email
  var user_ID;
  var user_email;
  await Booking.find({number: parseInt(booking_number)}).then((result)=>{
    user_ID = result[0].userID;
    console.log("User's ID: "+ user_ID);
  });
  await User.find({_id:user_ID}).then((result)=>{
    user_email = result[0].email;
    console.log("User's email: "+ user_email);
  });


  //console.log("Email: "+ user_email);

  // create reusable transporter object using the default SMTP transport
  var transport = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.mailtrap.io',
      port: 587,
      auth: {
        user: '55fffd474bdfc1',
        pass: '2994cb4fcca7ea',
      },
      secure: false,
      //tls: {rejectUnauthorized: false}
    })
  );

  // //
  var mailOptions = {
    from: 'Admin <admin@airline.com>',
    to: user_email.toString(),
    subject: 'Cancellation mail',
    text: 'Hey there, This is a confirmation mail for your cancellation.) ',
    html: '<b>Hey there! </b><br> This is a confirmation mail for your cancellation.',
  };

  await send(transport, mailOptions);
};

async function send(transport, mailOptions) {
  //console.log('I am send fun');

  // send mail with defined transport object
  await transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}


const updateuser = (req, res) => {
  var user = 'menna';
  console.log("Enteredd");
  console.log(req);
  User.updateMany (
    
    { username: (user).toString()}, {
      first_name: (req.body.first_name).toString() ,
      last_name: (req.body.last_name).toString(),
      passport_number: (req.body.passport_number).toString(),
      email: (req.body.email).toString(),
      // username: (req.body.username).toString(),
      // address: (req.body.address).toString(),
      // code: parseInt(req.body.code),
      // password: (req.body.password).toString(),
      // type: parseInt(req.body.type)
    }
  ).then((result) => {
    //res.send('User!');
    console.log(result);
  
  
  } );
console.log("end");
};
const getuser = (req, res) => {
  var user = 'menna';

  var output = [];

  //get user id
  var uID;
   User.find({ username: user }).then((result) => {
    //uID = result[0]._id;
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
  });

}

module.exports = {
  router,
  getAllUsers,
  cancelReservation,
  getAllReservations,
  sendCancellationMail,
  getuser,
  updateuser
};
