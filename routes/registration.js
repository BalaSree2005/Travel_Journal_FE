const express = require('express');
const router = express.Router();
const fs = require('fs');

// GET route for user registration page
router.get('/user_register', (req, res) => {
    res.render('user_register');  // Render user registration page
});

// GET route for agent registration page
router.get('/agent_register', (req, res) => {
    res.render('agent_register');  // Render agent registration page
});

// POST route for handling user registration form
router.post('/register_user', (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    };

    // Save user data to user.json
    fs.readFile('./data/user.json', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        users.push(userData);
        fs.writeFile('./data/user.json', JSON.stringify(users, null, 2), err => {
            if (err) throw err;
            console.log('User data saved!');
        });
    });

    res.redirect('/user_register');  // Redirect after submission
});

// POST route for handling agent registration form
router.post('/register_agent', (req, res) => {
    const agentData = {
        name: req.body.name,
        agency: req.body.agency,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    };

    // Save agent data to agent.json
    fs.readFile('./data/agent.json', (err, data) => {
        if (err) throw err;
        let agents = JSON.parse(data);
        agents.push(agentData);
        fs.writeFile('./data/agent.json', JSON.stringify(agents, null, 2), err => {
            if (err) throw err;
            console.log('Agent data saved!');
        });
    });

    res.redirect('/agent_register');  // Redirect after submission
});

module.exports = router;
