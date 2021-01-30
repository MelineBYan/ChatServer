const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const roomSchema = new Schema({
    roomName:  { 
        type: String, 
        required: true,
        enum: ['languages', 'literature', 'mathemathics', 'phisics', 'computer knowledge']
    }
});

module.exports = mongoose.model("Room", roomSchema);
