// Skeleton code for the Express server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Placeholder for database connection
// const db = ...

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to IoT Device Inventory Manager!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
