const express = require('express');
const router = express.Router();

// Temporary HardCorded User 

const users = [
  {id: 1, username: 'admin', password: '123'}
];

// Post api 
router.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username || password ) {
        return res.status(400).json({success: false, message: 'Username and Password required'});
    }

    const user = users.find(u => u.username === username && u.password === password);
    if(!user) {
        return res.status(401).json({ success: false, message: 'Invalid Credentials'});
    }

    res.json({ success: true, user: {id: user.id, username: user.username}});
});

module.exports = router;

