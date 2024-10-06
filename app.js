const express = require('express');
const app = express();  // Initialize the app
const path = require('path');
const session = require('express-session');
const registerRoute = require('./routes/registration');  // Your routing file

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route for home page
app.get('/', (req, res) => {
  res.render('index');  // Assuming you have an 'index.pug' file in the views folder
});

// Route for login page
app.get('/login', (req, res) => {
  res.render('login');  // Make sure you have a 'login.pug'
});

// Route for register page
app.get('/register', (req, res) => {
  res.render('register');  // Similarly, handle register route with a 'register.pug'
});

// Session management middleware
app.use(session({
  secret: 'Bala_03867@sree_4050.',  // Use a secure secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true if using HTTPS
}));

// Use the registration route
app.use(registerRoute);  // Import routes from another file (like ./routes/registration.js)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).render('error', { message: err.message });
});

// Listen on port 4050
app.listen(4050, () => {
  console.log('Server running at http://localhost:4050');
});
