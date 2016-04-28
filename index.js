var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var backCtrl = require("./controllers/BackCtrl.js");


var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

var mongoUri = 'mongodb://localhost:27017/emergency';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('Connected to mongodb\n');
});


//endpoints


//books
app.get('/api/books', backCtrl.bookRead);
app.post('/api/books', backCtrl.bookCreate);
app.put('/api/books/:id', backCtrl.bookUpdate);
app.delete('/api/books/:id', backCtrl.bookDelete);

//shelf
app.get('/api/shelfs', backCtrl.shelfRead);
app.post('/api/shelfs', backCtrl.shelfCreate);
app.put('/api/shelfs/:id', backCtrl.shelfUpdate);
app.delete('/api/shelfs/:id', backCtrl.shelfDelete);
app.post('/api/shelfs/:id', backCtrl.shelfAddBook);




//end
app.listen(3141, function(){
    console.log("Having a dance party on port 3141");
})