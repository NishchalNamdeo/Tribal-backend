// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const app = express();


const path = require('path');
const expressSession = require('express-session');
// const flash = require("connect-flash")
const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000




const indexRoute = require('./src/routes/indexRouter');




// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(flash());


// Use the index router for the root path
app.use('/', indexRoute);







// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
