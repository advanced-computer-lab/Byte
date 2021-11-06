// External variables
const express = require("express");

//App variables
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require('./config/db');

const userController = require('./controllers/userController.js');
const flightController = require('./controllers/flightController.js');
const createFlightsController = require('./controllers/createFlightsController.js');
const updateflightController=require('./controllers/updateflightController.js');

//connect Database
connectDB();

app.set('view engine','ejs');

//middlewares
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//Routes
app.use('/user', userController);
app.use('/list', flightController);
app.use('/create', createFlightsController);

app.use('/updateflight',updateflightController);

//app.get('/', (req,res) => res.send('API Running'));


// Starting server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));