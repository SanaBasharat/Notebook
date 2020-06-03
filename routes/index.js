var express = require('express');
var router = express.Router();
var sql = require('mssql');
const connectdb = require('../db');
const user = require('../users');


async function adduserinnewindb(n,p,e) {


  await user.create({ Name: n, Password: p, Email: e, documents:['Untitled doc']});


}


//var Engine = require('./engine');
var fs = require('fs');
var mysql = require('mysql');
//var Index = new Engine.Index();

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

  adduserinnewindb(username,password,email);

 });

module.exports = router;

