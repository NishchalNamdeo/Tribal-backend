const mongoose = require('mongoose');
require('dotenv').config();
// Retrieve MongoDB URI from environment variables
const uri = process.env.MONGO_DB_URI;

if (!uri) {
  console.error('MongoDB URI is not defined');
  process.exit(1); // Exit the application with an error
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Mongoose connection established successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Export the connection
module.exports = mongoose.connection;
