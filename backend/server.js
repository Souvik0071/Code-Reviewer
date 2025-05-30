// Load environment variables from .env file into process.env
require('dotenv').config();

// Import the configured Express application from app.js
const app = require('./src/app');

// Start the server and listen on port 3000
app.listen(3000, () => {
    // Log message to confirm server is running
    console.log('Server is running on port 3000');
});
