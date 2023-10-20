
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true }, 
        date: { type: Date, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        organizer: {
          title: { type: String, required: true },
          role: { type: String, required: true },
        }
    },
    {
        timestamps: true,
    }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;