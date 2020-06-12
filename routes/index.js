var express = require('express');
var router = express.Router();
var session = require('express-session');
// const user = require('../users.js');
var fs = require('fs');
const poolPromise = require('../db.js');

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

    const pool = await poolPromise;
  //add to DB
    try{
      var results = await pool.query("select count(*) as mycount from users where emailid='"+email+"'");
      if (results.recordset[0].mycount == 0){
        var results = await pool.query("insert into users values ('"+username+"','"+email+"','"+password+"')");
        console.log(results);
        res.redirect("/notebook");
      }
      else{
        res.status(401).send('This email already exists in our database. Please use another');
        console.log("invalid email");
      }
    }
    catch (err) {
        console.log(err);
        next(err);
        return;;
    }
});

router.post('/loginverify', async function(req, res, next) {
    console.log("redirected to login");
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var verified = false;
    var uname, em, pass, found;
    const pool = await poolPromise;

    //read from DB
    try{
      var results = await pool.query("select * from users where emailid='"+email+"'");
      console.log(results.recordset[0].password);
      if (results.recordset[0].password==password){
        console.log("correct password");
        req.session.username = results.recordset[0].username;
        req.session.loggedIn = true;
        req.session.email = email;
        req.session.password = password;
        res.redirect("/notebook");
      }
      else{
        res.status(401).send('Wrong password. Please enter again.');
        console.log("invalid password");
      }
    }
        catch (err) {
            console.log(err);
            next(err);
            return;;
    }
});

module.exports = router;
