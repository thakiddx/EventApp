const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('dotenv').config();
require('./config/db.js');
const PORT = 3000;

require('./config/db.js')

const app = express();


// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE //

// START ROUTES //


app.post("/events", async (req, res) => {
    // 1. get the data that was sent from the frontend
    // let eventData = req.body.eventData;
    let { eventData } = req.body;
    // 2. Model.create(eventData)
    try {
        await Event.create(eventData);
        res.status(201).send('created a new event!')
    } catch (err) {
    
    }
});


// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});




