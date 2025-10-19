require('dotenv').config();
const app = require('../backend/src/app'); // App import karo
const connectToDB = require('../backend/src/db/db');

// Database connect karo
connectToDB();

// Export app as serverless function
module.exports = app;
