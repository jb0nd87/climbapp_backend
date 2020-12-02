require('dotenv').config();
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const { MONGODBURI } = process.env;

// CREATE CONNECTION
mongoose.connect(MONGODBURI, config);

// DB EVENTS
mongoose.connection
	.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('Mongo connecion closed'))
	.on('error', (error) => console.log(error));

module.exports = mongoose;
