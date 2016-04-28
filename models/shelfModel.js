var mongoose = require("mongoose");

var shelfSchema = new mongoose.Schema({
    genre : {type: String, required: true},
    books: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Book"}
    ]
})

module.exports = mongoose.model("Shelf", shelfSchema);