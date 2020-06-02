var express = require('express');
var router = express.Router();
const poolPromise = require('../db.js');
var fs = require('fs');
var mysql = require('mysql');
var MongoClient = require ("mongodb").MongoClient;
var connection = 'mongodb://localhost:27017/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'HAHA' });
});

router.post('/signupverify', async function(req, res, next) {
  console.log("redirected to notebook");
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var verified = false;
  var uname, em, pass, found;

  

});

// router.post('/notebook', function(req, res, next) {
//   console.log("111111111")
//   //res.json({name: ["doc1", "doc2", "doc3", "doc4"]});
//   res.render('notebook',{ name: ["doc1", "doc2", "doc3", "doc4"]});
//   //res.send({name: ["doc1", "doc2", "doc3", "doc4"]});
//   res.end();
// });
module.exports = router;
