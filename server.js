// Import Express framework
const express = require('express');

// Import Node.js path module
const path = require('path');

// Import CORS package
const cors = require('cors');

// Create an Express application
const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static('public'));

// Handle GET request for the home page
app.get("/", (req, res) => {

    // Send index.html file to the browser
    res.sendFile(path.join(__dirname, "public", "index.html"));

});

// Define the server port
const PORT = 3000;

// Start the server on port 3000
app.listen(PORT, () => {

    // Display message in the terminal
    console.log("server is running on 3000");

});