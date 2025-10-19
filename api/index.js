require('dotenv').config();
const app = require('../backend/src/app');
const connectToDB = require('../backend/src/db/db');

let isConnected = false;

module.exports = async (req, res) => {
  // Database connection (reuse if already connected)
  if (!isConnected) {
    await connectToDB();
    isConnected = true;
    console.log('Database connected');
  }

  // Let Express handle the request
  return app(req, res);
};
