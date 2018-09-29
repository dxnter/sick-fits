require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Cookies
// Populate current user

server.start({}, deets => {
  console.log(`Server is now running on port http:/localhost:${deets.port}`);
});
