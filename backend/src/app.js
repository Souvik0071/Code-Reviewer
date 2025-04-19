// Import required modules
const express = require('express');         // Express framework for building the server
const aiRoutes = require("./routes/ai.routes"); // Import AI-related routes
const cors = require('cors');               // CORS middleware for cross-origin requests

// Initialize Express application
const app = express();

// Middleware setup
app.use(cors());                            // Enable CORS for all routes
app.use(express.json());                    // Parse incoming JSON requests

// Basic root route for health check
app.get('/', (req, res) => {
    res.send('hello world');                // Simple response to verify server is running
});

// Mount AI routes under the '/ai' path prefix
app.use('/ai', aiRoutes);

// Export the configured Express application
module.exports = app;