var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://heroku_7w45jd6n:9uu5gh7nlpqkg8h15girn5k90e@ds039404.mongolab.com:39404/heroku_7w45jd6n', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});

