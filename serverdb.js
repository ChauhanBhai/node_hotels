const express = require('express');
const app = express();
const db = require('./db'); // Ensure this file connects to your MongoDB database
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello World, it is ok');
});

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes)


// Create a router path 
const menuItemsRoutes = require('./routes/menuRoutes');
app.use('/menu',menuItemsRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
