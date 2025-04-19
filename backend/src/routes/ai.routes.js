// Import the express framework for creating the router
const express = require('express');
// Import the AI controller which contains the route handler logic
const aiController = require("../controllers/ai.controller");
// Create a new router instance from Express
const router = express.Router();

// Define a POST route '/get-review' that uses the getReview controller function
// This route will handle requests for code reviews
router.post("/get-review", aiController.getReview);

// Export the router to be used in the main application
module.exports = router;