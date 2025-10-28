const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// JWT Secret Key 
const JWT_SECRET = 'docManagementSystem2024SecretKey!@#$%';

// Temporary HardCorded User 
const users = [
  {id: 1, username: 'admin', password: '123', email: 'admin@example.com'}
];

// Post api 
router.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(!username || !password ) {
        return res.status(400).json({success: false, message: 'Username and Password required'});
    }

    const user = users.find(u => u.username === username && u.password === password);
    if(!user) {
        return res.status(401).json({ success: false, message: 'Invalid Credentials'});
    }

    res.json({ success: true, message: 'Login successful!', user: {id: user.id, username: user.username}});
});

module.exports = router;

