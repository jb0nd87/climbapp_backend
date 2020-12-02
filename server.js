require('dotenv').config();
const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./db/db');
const AuthRouter = require('./controllers/user');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// ROUTERS
app.use('/auth', AuthRouter);

// LISTENER
app.listen(PORT, () => {
	console.log(`You are listening on PORT ${PORT}`);
});
