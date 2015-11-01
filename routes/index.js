var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.jade', { title: 'Express' });
});



router.get('/newvehicle', function(req, res){
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

router.get('/vehiclelist', function(req, res){
    loadVehicles(res);
});

router.post('/newvehicle', function(req, res){


    var vehicle = { 'vehiclemake': req.body.vehiclemake,
                    'vehiclecode' : req.body.vehiclecode
                  };
    console.log(vehicle);
    insertVehicle(vehicle);

    res.redirect('vehiclelist');
});



module.exports = router;
