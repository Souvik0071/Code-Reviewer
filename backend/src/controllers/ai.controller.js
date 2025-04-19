// Import the aiService module which contains the AI-related business logic
const aiService = require("../services/ai.service") 

// Define and export the getReview controller function
module.exports.getReview = async (req, res) => {
    // Extract the 'code' from the request body
    const code = req.body.code;
    
    // Check if code is provided in the request
    if (!code) {
        // Return a 400 Bad Request response if no code is provided
        return res.status(400).send("prompt is required"); 
    }
    
    // Call the aiService with the provided code and wait for the response
    const response = await aiService(code);

    // Send the AI service's response back to the client
    res.send(response);
}