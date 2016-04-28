var Book = require("../models/bookModel.js");
var Shelf = require("../models/shelfModel.js");

module.exports = {
    
    bookCreate: function(req, res, next){
        var newBook = new Book(req.body);
        newBook.save(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    bookRead: function(req, res, next){
        Book.find({})
            .exec(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    bookUpdate: function(req, res, next){
        Book.findByIdAndUpdate(req.params.id, req.body, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    bookDelete: function(req, res, next){
        Book.findByIdAndRemove(req.params.id, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    shelfCreate: function(req, res, next){
        var newShelf = new Shelf(req.body);
        newShelf.save(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    shelfRead: function(req, res, next){
        Shelf.find({})
        .populate({path: 'books', select: 'title author -_id'})
            .exec(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    shelfUpdate: function(req, res, next){
        Shelf.findByIdAndUpdate(req.params.id, req.body, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    shelfDelete: function(req, res, next){
        Shelf.findByIdAndRemove(req.params.id, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
    
    shelfAddBook: function(req, res, next){
        Shelf.findById(req.params.id, function(err1, res1){
            var shelf = res1;
            shelf.books.push(req.body.id);
            Shelf.findByIdAndUpdate(shelf._id, shelf, function(err2, res2){
                if(err2){
                res.status(500).json(err2);
            }else{
                res.status(200).json(res2);
            }
            })
        })
    }
}

//572161455f362d401263f17f