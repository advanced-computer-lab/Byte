const User = require('../models/User');
const connectDB = require('../config/db');

//connect Database
connectDB();

var userSeedsData = {
    Name : "Administrator",
    Email : "admin@admin.com",
    Password : "admin"
};

User.insertMany(userSeedsData).catch(console.error);