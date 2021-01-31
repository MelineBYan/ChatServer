const mongoose = require("mongoose");
const { mongoDBUrl } = require('./config');

module.exports = mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        return console.log(`Error: ${err.message}`)
    }
    console.log("Connected!")
});

