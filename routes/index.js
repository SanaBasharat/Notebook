var express = require('express');
var router = express.Router();
var session = require('express-session');
const user = require('../users.js');
var fs = require('fs');
//var MongoClient = require ("mongodb").MongoClient;
//var connection = 'mongodb://localhost:27017/';

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

    req.session.username = username;
    req.session.loggedIn = true;
    req.session.email = email;
    req.session.password = password;
  //add to DB
    try{
    res.redirect("/notebook");
    }
    catch (err) {
        console.log(err);
        next(err);
        return;;
    }
});

router.post('/loginverify', async function(req, res, next) {
    console.log("redirected to notebook");
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var verified = false;
    var uname, em, pass, found;
  
    //read from DB
    try{
        res.redirect("/notebook");
        }
        catch (err) {
            console.log(err);
            next(err);
            return;;
    }
});

module.exports = router;
