const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() =>
{
    console.log('connected to MD')
})
.catch((err) =>{
    console.error('Error connecting')
})