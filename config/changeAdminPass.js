const connectDB = require('./db');
const bcrypt = require('bcrypt');

//connect Database
connectDB();

const User = require('../models/user.js');

async function temp(){
    var pass =  await bcrypt.hash('admin', 10);
    var pass2 = await bcrypt.hash('dinah', 10);
    console.log(pass)
    console.log(pass2)
    
    await User.updateMany(
        { username: 'admin' },
        {
          password: pass,
        }
      );
    
    await User.updateMany(
        { username: 'dinah' },
        {
          password: pass2,
        }
      );
}

temp()
