const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

let refreshTokens = [];

const stripe = require('stripe')(
  'sk_test_51K6CPuAyZ2iyoaqNnr5UVKKGLZggC4oOjPHVBHdYPYb0MwsOjTb3JqFvPuwIjKDldpHJI1Ou1jozBsAMNzeVo38i00fEY4ywDK'
);
const { v4: uuidv4 } = require('uuid');

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
  var my_user;
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    my_user = user;
    //next();
  });

  //we need to get user here
  var user = 'dinah';
  //var user = my_user.username;
  //console.log('YSHEEHEJ' + user);

  var output = [];

  //get user id
  var uID;
  await User.find({ username: user }).then((result) => {
    uID = result[0]._id;
    //console.log('IDDDDD ' + uID);
  });

  //get bookings of user
  var results;
  await Booking.find({ userID: uID }).then((result) => {
    results = result;
    //console.log('RESULTS ' + results);
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
      seat_number: [0],
    };
    t.bnumber = results[i].number;
    t.price = results[i].price;
    t.seat_number = results[i].chosen_seats;

    await Cabin.find({ _id: results[i].cabinID.toString() }).then(
      (resultsz) => {
        console.log('FGSYSNHJMSI ' + resultsz);
        if (resultsz[0].class == 0) {
          t.class = 'First';
        } else {
          if (resultsz[0].class == 1) {
            t.class = 'Buisness';
          } else {
            if (resultsz[0].class == 2) {
              t.class = 'Economy';
            }
          }
        }
      }
    );

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
async function sendCancellationMail(booking_number) {
  //get user's email
  var user_ID;
  var user_email;
  await Booking.find({ number: parseInt(booking_number) }).then((result) => {
    user_ID = result[0].userID;
    console.log("User's ID: " + user_ID);
  });
  await User.find({ _id: user_ID }).then((result) => {
    user_email = result[0].email;
    console.log("User's email: " + user_email);
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
}

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

async function sendIten(req, res) {
  //get username from token
  //get user id and email from databse
  //get user bookings from database
  var user;

  //console.log('jwt :' + req.headers['authorization'].replace(/['"]+/g, ''));
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, dbuser) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    user = dbuser;
    //next();
  });

  var output = [];

  //get user id
  var uID;
  var email;
  await User.find({ username: user.username }).then((result) => {
    uID = result[0]._id;
    email = result[0].email;
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
      seat_number: [0],
    };
    t.bnumber = results[i].number;
    t.price = results[i].price;
    t.seat_number = results[i].chosen_seats;

    await Cabin.find({ _id: results[i].cabinID.toString() }).then(
      (resultsz) => {
        //console.log(resultsz);
        if (resultsz[0].class == 0) {
          t.class = 'First';
        } else {
          if (resultsz[0].class == 1) {
            t.class = 'Buisness';
          } else {
            if (resultsz[0].class == 2) {
              t.class = 'Economy';
            }
          }
        }
      }
    );

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

  //send email
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

  console.log('send Iten function ' + email);
  console.log('out ' + output.toString());

  // //
  var mailOptions = {
    from: 'Admin <admin@airline.com>',
    to: email.toString(),
    subject: 'Itinerary mail',
    text: 'Hey there,' + output.toString(),
    html: '<b>Hey there! </b><br> ' + output.toString(),
  };

  // send mail with defined transport object
  await transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

const updateuser = (req, res) => {
  // var user = 'menna';
  //console.log('Enteredd');
  //console.log(req);
  var my_user;

  //console.log('jwt :' + req.headers['authorization'].replace(/['"]+/g, ''));
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    my_user = user;
    //next();
  });

  User.updateMany(
    { username: my_user.username.toString() },
    {
      first_name: req.body.first_name.toString(),
      last_name: req.body.last_name.toString(),
      passport_number: req.body.passport_number.toString(),
      email: req.body.email.toString(),
      // username: (req.body.username).toString(),
      // address: (req.body.address).toString(),
      // code: parseInt(req.body.code),
      // password: (req.body.password).toString(),
      // type: parseInt(req.body.type)
    }
  ).then((result) => {
    //res.send('User!');
    console.log(result);
  });
  console.log('end');
};
const getuser = (req, res) => {
  var my_user;

  //console.log('jwt :' + req.headers['authorization'].replace(/['"]+/g, ''));
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    my_user = user;
    //next();
  });

  //console.log('user : ' + my_user.username);

  var output = [];

  //get user id
  var uID;
  User.find({ username: my_user.username }).then((result) => {
    //uID = result[0]._id;
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
  });
};

async function signup(req, res) {
  //get puser data from req body
  const user = JSON.parse(req.query[0]);

  console.log('user: ' + user);
  console.log(user.password);

  //check if username or email are taken by another user
  const takenUsername = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenUsername || takenEmail) {
    res.json({ message: 'Username or email has already been taken' });
  } else {
    //encrypt password
    user.password = await bcrypt.hash(user.password, 10);

    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.address,
      code: parseInt(user.code),
      passport_number: user.passport_number,
      type: 1,
    });

    //inset user into the databse
    dbUser.save();
    res.json({ messages: 'Success' });
  }
}

const signin = (req, res) => {
  //get user login data from req body
  const userLoggingIn = JSON.parse(req.query[0]);
  console.log('logging in user: ' + userLoggingIn.username);

  User.findOne({ username: userLoggingIn.username }).then((dbUser) => {
    //make sure user exists in the databse
    if (!dbUser) {
      console.log('wrong username');
      return res.json({
        //username doesnt exist
        message: 'Inavalid Username or Password',
      });
    }
    bcrypt
      .compare(userLoggingIn.password, dbUser.password)
      .then((isCorrect) => {
        if (isCorrect) {
          //correct password
          console.log('correct');

          const payload = {
            id: dbUser._id,
            username: dbUser.username,
          };

          const accessToken = generateAccessToken(payload);
          const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET
          );
          refreshTokens.push(refreshToken);
          res.json({ accessToken: accessToken, refreshToken: refreshToken });

          // jwt.sign(
          //   payload,
          //   process.env.JWT_SECRET,
          //   { expiresIn: 86400 },
          //   (err, token) => {
          //     if (err) {
          //       return res.json({ message: err });
          //     } else {
          //       console.log('token: ' + token);
          //       return res.json({
          //         message: 'Success',
          //         token: 'Bearer ' + token,
          //       });
          //     }
          //   }
          // );
        } else {
          //wrong password
          console.log('wrong password');
          return res.json({
            message: 'Inavalid Username or Password',
          });
        }
      });
  });
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  //const authHeader = req.route[Symbol(kHeaders)].authorization;
  //console.log(req.headers);
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    console.log('No Token found');
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// function verifyJWT(req, res, next) {
//   //we get the token from the req header
//   //which we set it to the token in the frotend from the localstorage

//   console.log('Auth Function');

//   const token = req.headers['x-access-token']?.split(' ')[1];

//   //if a token really exists in the header
//   if (token) {
//     //we want to verify it's the same token we have stored for that user
//     jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
//       //if couldnt verify then fail and dont go forwards
//       //isLoggedIn is what we'll use to allow routing in react router
//       if (err) {
//         res.setHeader('Content-Type', 'application/json');
//         return res.send(
//           JSON.stringify({
//             isLoggedIn: false,
//             message: 'Failed to Authenticate',
//           })
//         );
//       }
//       //else go ahead to the requested link
//       req.user = {};
//       req.user.id = decoded.id;
//       req.user.username = decoded.username;
//       next();
//     });
//   } else {
//     //No token in header
//     //console.log('No header');
//     res.setHeader('Content-Type', 'application/json');
//     res.send(
//       JSON.stringify({ isLoggedIn: false, message: 'Incorrect Token Given' })
//     );
//     //res.json({isLoggedIn: false, message: "Incorrect Token Given"});
//   }
// }

const getUsername = (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
};

const logout = (req, res) => {
  //delete the token from the local storage
  //so the auth will fail and should redirect to login page
  //localStorage.removeItem('token');
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
};

async function pay(req, res, next) {
  console.log(req);
  //get user from token
  var my_user;

  //console.log('jwt :' + req.headers['authorization'].replace(/['"]+/g, ''));
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    my_user = user;
    //next();
  });
  //get user email and id
  await User.findOne({ username: my_user.username }).then((dbUser) => {
    my_user = dbUser;
  });
  console.log('email ' + my_user.email);
  console.log('id ' + my_user._id);

  //from the sent body get flight number => from it we can get flight id
  var flight_number = req.query.flight_number;
  console.log('flight number ' + flight_number);

  var flightID;
  await Flight.findOne({ number: flight_number }).then((flight) => {
    flightID = flight._id;
  });
  console.log('flight ID ' + flightID);

  //from body get price/number of passengers / array of seats chosen / chose cabin /
  var price = req.query.amount;
  console.log('price ' + price);
  var num_of_passengers = req.query.noOfSeats;
  console.log('Number ' + num_of_passengers);
  var array_of_seats = req.query.selected;
  console.log('array ' + array_of_seats);
  var cabin = req.query.class;
  console.log('cabin class' + cabin);

  //get cabin ID from cabin type and flight IDs
  var cabinID;

  if (cabin == 'first') {
    cabin = '0';
  } else {
    if (cabin == 'business') {
      cabin = '1';
    } else {
      if (cabin == 'economy') {
        cabin = '2';
      }
    }
  }
  console.log('CABIN ' + cabin);

  await Cabin.findOne({ flightID: flightID, class: parseInt(cabin) }).then(
    (cabinRES) => {
      cabinID = cabinRES._id;
    }
  );
  console.log('cabin ID' + cabinID);

  //create a unique booking number
  var booking_number = parseInt(Math.random() * 100000);

  //insert into booking table
  const dbBooking = new Booking({
    number: booking_number,
    price: price,
    num_of_passengers: num_of_passengers,
    chosen_seats: array_of_seats,
    flightID: flightID,
    userID: my_user._id,
    cabinID: cabinID,
  });
  dbBooking.save();

  //send payment email
  //send email
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

  //console.log('send Iten function ' + email);
  //console.log('out ' + output.toString());

  // //
  var mailOptions = {
    from: 'Admin <admin@airline.com>',
    to: my_user.email,
    subject: 'Confirmation mail',
    text: 'Hey there,This is a payment confirmation email',
    html: '<b>Hey there! </b><br> This is a payment confirmation email',
  };

  // send mail with defined transport object
  await transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  //const { user, amount } = req.body;
  const tokenn = req.query.token;
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: my_user.email,
      source: tokenn,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: price,
          currency: 'usd',
          customer: customer.id,
          receipt_email: my_user.email,
        },
        { idempotencyKey }
      );
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function changePass(req, res) {
  var my_user;
  var old = req.query.old_pass;
  var neww = req.query.new_pass;
  var neww2 = req.query.new_pass2;

  console.log('IN CHNAGE PASSWORD BACKEND');
  //console.log(res)

  //console.log('jwt :' + req.headers['authorization'].replace(/['"]+/g, ''));
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  if (!(neww == neww2)) {
    return res.json({
      //username doesnt exist
      message: 'Passwords do not match',
    });
  }
  //hash the new pass
  neww = await bcrypt.hash(neww, 10);

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    my_user = user;
    //next();
  });

  User.findOne({ username: my_user.username }).then((dbUser) => {
    //make sure user exists in the databse
    if (!dbUser) {
      //console.log('wrong username');
      console.log('No User exists with this username');
      return res.json({
        //username doesnt exist
        message: 'User doesnt exist',
      });
    }
    bcrypt.compare(old, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        console.log('Old password Correct');

        //correct password
        //change to new
        User.updateMany(
          { username: my_user.username.toString() },
          {
            password: neww,
          }
        );
        return res.json({
          message: 'Password Changed Successfully',
        });

        //res.json({ accessToken: accessToken, refreshToken: refreshToken });
      } else {
        //wrong password
        //console.log('wrong password');
        console.log('old password wrong');
        return res.json({
          message: 'Wrong Password',
        });
      }
    });
  });
}

function isAdmin(req, res) {
  var my_user;
  var token = req.headers['authorization'];
  token = token.replace(/['"]+/g, '');

  //console.log(token);

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //console.log("error " + err);
    if (err) return res.sendStatus(403);
    my_user = user;
    //next();
  });

  console.log(my_user.username);

  if (my_user.username === 'admin') {
    return res.json({
      message: 'true',
    });
  } else {
    return res.json({
      message: 'false',
    });
  }
}

module.exports = {
  router,
  getAllUsers,
  cancelReservation,
  getAllReservations,
  sendCancellationMail,
  getuser,
  updateuser,
  signup,
  signin,
  pay,
  logout,
  getUsername,
  authenticateToken,
  changePass,
  isAdmin,
  sendIten,
};
