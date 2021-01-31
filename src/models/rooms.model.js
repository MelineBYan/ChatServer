const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const roomSchema = new Schema({
    roomName:  { 
        type: String, 
        required: true,
        enum: ['general', 'languages', 'literature', 'mathemathics', 'phisics', 'computer knowledge'],
        default: 'general'
    }
});

module.exports = mongoose.model("Room", roomSchema);
