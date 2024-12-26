// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const app = express();


const path = require('path');
const expressSession = require('express-session');
// const flash = require("connect-flash")
const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000




const indexRoute = require('./src/routes/indexRouter');
const AboutRoute = require ('./src/routes/AboutRouter')
const resourceRoute = require ('./src/routes/ResourceRouter');
const galleryRoute = require('./src/routes/GalleryRouter');
const eventRoute = require('./src/routes/EventRouter');
const getinvolvedRoute = require('./src/routes/GetinvolvedRouter');
const blogRoute = require('./src/routes/blogRouter')




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
app.use('/about', AboutRoute);
app.use('/resource', resourceRoute)
app.use('/gallery', galleryRoute)
app.use('/events', eventRoute)
app.use('/get-involved', getinvolvedRoute)
app.use('/blog', blogRoute)












// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
