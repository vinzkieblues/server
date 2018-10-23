const express = require('express');
const bodyParser = require('body-parser');
const event = require('./routes/event.route'); // Imports routes for the events
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://vinzkie:bluesclues223@ds139883.mlab.com:39883/events';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/events', event);
let port = 8000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
