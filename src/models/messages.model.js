const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const msgSchema = new Schema({
    senderId:   {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        required: true
    },
    // roomId:  {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Room',
    //     required: true 
    // },
    text:  {
        type: String,
        required: true
    },
    created: {
        type: Date, 
        default: Date.now,
       
    },
    edited: {
        type: Boolean,
        default: false,
        
    }

});

module.exports = mongoose.model("Msg", msgSchema);
