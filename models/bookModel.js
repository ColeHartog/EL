var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, default: "Unknown"}
})

module.exports = mongoose.model("Book", bookSchema);