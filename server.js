// External variables
const express = require("express");
var cors = require('cors');

//App variables
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require('./config/db');

const userController = require('./controllers/userController.js');
const flightController = require('./controllers/flightController.js');
const createFlightsController = require('./controllers/createFlightsController.js');
const updateflightController=require('./controllers/updateflightController.js');
const searchController=require('./controllers/searchController.js');

const flightRouter = require('./routers/flightsRouter.js');
const userRouter = require('./routers/userRouter.js');
const searchRouter = require('./routers/searchRouter.js');
const adminRouter = require('./routers/adminRouter.js');

//connect Database
connectDB();

// app.set('view engine','ejs');

// //middlewares
// app.set('view engine','ejs');
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());
app.use(cors());

//redirect to routers
app.use('/flights',flightRouter);
app.use('/user', userRouter);
app.use('/search',searchRouter);

app.use('/admin',adminRouter);

//Routes
// router.get('/', (req, res) => {
//     res.render('adminHome.ejs');
// });
// router.get('/user', userController);
// router.get('/create', createFlightsController);
// router.get('/search', searchController);
// router.get('/updateflight',updateflightController);

//app.get('/', (req,res) => res.send('API Running'));


// Starting server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));