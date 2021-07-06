'use strict';

// Start up DB Server
const mongoose = require('mongoose');
require('dotenv').config();
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/server').startup(process.env.PORT);