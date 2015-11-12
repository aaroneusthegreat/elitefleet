var express = require('express');
var app = express.Router();
var http = require('http');
util = require('util');
var formidable = require('formidable');

var fs = require('fs');


/* GET home page. */
app.get('/', function(req, res) {
  res.render('index.jade', { title: 'Express' });
});

app.get('/upload', function(req,res){
    res.render('upload.jade', {title: 'Upload'});
});



app.post('/upload', function(req, res){

    fs.readFile(req.files.upload.path, function (err, data) {
        // ...
        var newPath = __dirname + "/upload";
        fs.writeFile(newPath, data, function (err) {
        });
    });


    res.render('index.jade', {title:'Elite Fleet'});
});


app.get('/newvehicle', function(req, res){
	res.render('newvehicle.jade', {title:'New Vehicle'});
});

var findvehicles = function(db, callback){
    var cursor = db.collection('vehicles').find();
    cursor.each(function(err, doc){
        console.log('in vehicles');
        if(doc != null){

            console.dir(doc);
        }
        else{
            callback();
        }
    });


};

app.get('/vehiclelist', function(req, res){
    loadVehicles(res);
});

app.get('/test', function(req,res){
    res.render('test.jade');
});
//TODO add false vehicle data trapping
app.post('/newvehicle', function(req, res){

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if (err) {

            // Check for and handle any errors here.

            console.error(err.message);
        }

    var vehicle = { 'vehicle_id' : fields.vehicle_id,
                    'vehicle_class' : fields.vehicle_class,
                    'vehicle_year' : fields.vehicle_year,
                    'vehicle_make' : fields.vehicle_make,
                    'vehicle_model' : fields.vehicle_model,
                    'vehicle_status' : fields.vehicle_status,
                    'vehicle_workorder' : fields.vehicle_status,
                    'vehicle_workorder_date_in' : fields.vehicle_workorder_date_in,
                    'vehicle_workorder_date_out' : fields.vehicle_workorder_date_out,
                    'vehicle_transaction_date' : fields.vehicle_transaction_date,
                    'vehicle_repair_code' : fields.vehicle_repair_code,
                    'vehicle_repair_type_desc' : fields.vehicle_repair_type_desc,
                    'vehicle_repair_group' : fields.vehicle_repair_group,
                    'vehicle_repair_component' : fields.vehicle_repair_component,
                    'vehicle_repair_action' : fields.vehicle_repair_action,
                    'vehicle_asset_group' : fields.vehicle_asset_group,
                    'vehicle_fiscal_year' : fields.vehicle_fiscal_year,
                    'vehicle_repair_desc' : fields.vehicle_repair_desc

                  };

    console.log(vehicle);
    console.log('________________________');
    insertVehicle(vehicle);

    res.redirect('vehiclelist');
    });
});



module.exports = app;
