const User = require('../models/User');
const connectDB = require('../config/db');

//connect Database
connectDB();

var userSeedsData = {
    first_name : "Administrator",
    last_name : "Administrator",
    passport_number : "J12393496",
    email : "adminadmin@gmailco.ml",
    username : "admin",
    address : "123,Gotham street,Gotham",
    code : 44,
    password : "admin",
    type : 0
};

User.insertMany(userSeedsData).catch(console.error);