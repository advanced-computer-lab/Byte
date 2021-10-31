// External variables
const mongoose = require('mongoose');
const config = require('config');

//mongoURI
const db = config.get('mongoURI');

// configurations

// Mongo DB connection without async -
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(result =>console.log("MongoDB is now connected") )
// .catch(err => console.log(err));

// Mongo DB connection with async
const connectDB = async () => {
    try {
        await mongoose.connect(db);

        console.log('MongoDB conneced...')
    } catch (err) {
        console.log(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;