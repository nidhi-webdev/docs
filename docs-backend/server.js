const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001; 

// Middle ware 
app.use(cors());
app.use(express.json());

// mount auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Test route
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// start server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
