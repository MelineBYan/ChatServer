const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const msgSchema = new Schema({
    senderId:   {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    roomId:  {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Room' 
    },
    text:  {
        type: String
    },
    created: {
        type: Date, 
        default: Date.now
    }

});

module.exports = mongoose.model("Msg", msgSchema);
