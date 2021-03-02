const mongoose = require("mongoose");
const { Schema, ObjectId } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
