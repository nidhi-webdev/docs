const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 

// Middle ware 
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// start server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
