// External variables
const express = require("express");

//App variables
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require('./config/db');
const userController = require('./controllers/userController.js');
const flightController = require('./controllers/flightController.js');


//connect Database
connectDB();

//Routes
app.use('/user', userController);
app.use('/flight', flightController);
//app.get('/', (req,res) => res.send('API Running'));


// Starting server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));