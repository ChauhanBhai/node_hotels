const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/Hotel'; // Ensure this string is correct and without leading/trailing spaces

// Set up MongoDB connection 
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB');
});
db.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Export the database connection
module.exports = db;