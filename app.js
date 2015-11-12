var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var monk = require('monk');
var formidable = require('formidable');
var busboy = require('connect-busboy');




var http = require('http');
var util = require('util');

var jquery = require('jquery');

var MongoClient = require('bluebird').promisifyAll(require('mongodb')).MongoClient;
var ObjectId = require('mongodb').ObjectId;

//TODO figure out why heroku can't 'get'

var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

// app.js
var databaseUrl = "mongodb://heroku_7w45jd6n:9uu5gh7nlpqkg8h15girn5k90e@ds039404.mongolab.com:39404/heroku_7w45jd6n"; // "username:password@example.com/mydb"
var db = require("mongojs");

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





insertVehicle = function(data)
{
    MongoClient.connect(databaseUrl, function(err, db){
        db.collection('vehicles').insertOne(
            {
                'vehicle_id' : data.vehicle_id,
                'vehicle_class' : data.vehicle_class,
                'vehicle_year' : data.vehicle_year,
                'vehicle_make' : data.vehicle_make,
                'vehicle_model' : data.vehicle_model,
                'vehicle_status' : data.vehicle_status,
                'vehicle_workorder' : data.vehicle_status,
                'vehicle_workorder_date_in' : data.vehicle_workorder_date_in,
                'vehicle_workorder_date_out' : data.vehicle_workorder_date_out,
                'vehicle_transaction_date' : data.vehicle_transaction_date,
                'vehicle_repair_code' : data.vehicle_repair_code,
                'vehicle_repair_type_desc' : data.vehicle_repair_type_desc,
                'vehicle_repair_group' : data.vehicle_repair_group,
                'vehicle_repair_component' : data.vehicle_repair_component,
                'vehicle_repair_action' : data.vehicle_repair_action,
                'vehicle_asset_group' : data.vehicle_asset_group,
                'vehicle_fiscal_year' : data.vehicle_fiscal_year,
                'vehicle_repair_desc' : data.vehicle_repair_desc
            }, function (err, result) {
                console.log("A vehicle has just been inserted into the database");
            });
    });
};


//load vehicles asynchronously
loadVehicles = function(res){
    MongoClient.connectAsync(databaseUrl)
        .then(function(db) {
            db.collection('vehicles').findAsync({ })
                .then(function(cursor) {
                    return cursor.toArrayAsync();
                })
                .then(function(arrayOfVehciles) {
                   // console.log(arrayOfVehciles);
                    res.render('vehiclelist.jade',
                        {title: 'Vehicle List',
                            'vehiclelist':arrayOfVehciles});
                });
        });

};

loadIndex = function(res){
    MongoClient.connectAsync(databaseUrl)
        .then(function(db) {
            db.collection('vehicles').findAsync({ })
                .then(function(cursor) {
                    return cursor.toArrayAsync();
                })
                .then(function(arrayOfVehciles) {
                    // console.log(arrayOfVehciles);
                    res.render('index.jade',
                        {title: 'Elite Fleet',
                            'vehiclelist':arrayOfVehciles});
                });
        });

};

loadTest = function(res){
    MongoClient.connectAsync(databaseUrl)
        .then(function(db) {
            db.collection('vehicles').findAsync({ })
                .then(function(cursor) {
                    return cursor.toArrayAsync();
                })
                .then(function(arrayOfVehciles) {
                    // console.log(arrayOfVehciles);
                    res.render('test.jade',
                        {title: 'Elite Fleet',
                            'vehiclelist':arrayOfVehciles});
                });
        });

};

getVehicles = function(){
    var temp = new Object();
    db = monk(databaseUrl);
    var collection = db.get('vehicles');
    collection.find({},{},function(e,docs){
     //docs has an array of objects, but I'm not sure how to return them asychronously
        temp = docs;
    });

};
module.exports = app;
