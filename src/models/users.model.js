const mongoose = require("mongoose");
const { Schema, ObjectId } = require("mongoose");

const userSchema = new Schema({
    name:  { 
        type: String, 
        required: true,
        unique: true
    },
    email:  { 
        type: String,
        required: true, 
        unique: true 
    },
    password:  { 
        type: String, 
        required: true,
        trim: true 
    },
    // roomId: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Room',
    //     default: '6016fc45532333097cf5134f'
    // },
    online: {
        type: Boolean, 
        default: false
    } 
});

module.exports = mongoose.model("User", userSchema);
