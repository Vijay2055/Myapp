var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mysql=require('mysql');
var connection= mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'mydb'
});


connection.connect(function(err){
  if(!err){
    console.log('Connected to database')
  }
  else{
    console.log('Can not connect to database')
  }
});
router.get('/form', function(req, res, next) {
  res.render('form');
});





router.post('/processing', function(req, res, next) {
  console.log(req.body);
  var a=req.body.name;
  var b=req.body.gender;
  var c="Record is added";
   

  //console.log(a+b);

  connection.query("insert into student(name,gender) values (? ,?)",[a,b],function(err,result,field){
    res.render('ans',{mya:a,myb:b,myc:c});
  });
 
});

module.exports = router;
