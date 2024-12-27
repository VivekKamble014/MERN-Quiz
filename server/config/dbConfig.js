const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URL;

if (!mongoURI) {
  throw new Error('MONGO_URL environment variable is not defined');
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB connection successfully');
});

connection.on('error', (err) => {
  console.log('MongoDB connection failed', err);
});

module.exports = connection;