const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, max:100 },
});


// Export the model
module.exports = mongoose.model('Event', EventSchema);