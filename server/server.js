// Import required libraries
const express = require('express'); // Web framework for Node.js
const cors = require('cors'); // Enable Cross-Origin Resource Sharing
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Allow requests from different origins (frontend)
app.use(express.json()); // Parse JSON request bodies

// In-memory data storage (replace with database in production)
let langs = [];

// ========== API ROUTES ==========

// GET route - Retrieve all languages
app.get('/', (req, res) => {
    res.send('Hello User\n' + 'there are ' + langs.length + ' langs\n' + langs[0]);
});

// POST route - Add a new language
app.post('/', (req, res) => {
    if (req.query.lang) {
        langs.push(req.query.lang);
    }
    res.send(langs);
});

// PUT route - Update an existing language
app.put('/', (req, res) => {
    if (req.query.index && req.query.lang) {
        langs[req.query.index] = req.query.lang;
        res.send(langs[req.query.index]);
    } else {
        res.send('No Update was made');
    }
    // Example: localhost:3001/?lang=c++&index=0
});

// DELETE route - Remove a language
app.delete('/', (req, res) => {
    if (req.query.index) {
        langs[req.query.index] = undefined;
        res.send(req.query.index + ' was removed');
    } else {
        res.send('Nothing was removed. Send an index');
    }
});

// ========== SERVER STARTUP ==========

// Use PORT from .env file, fallback to 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
