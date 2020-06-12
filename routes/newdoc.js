var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');
const poolPromise = require('../db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("i am at newdoc");
    res.render("newdoc");
});

router.get('/savefile/:name/:id', async function(req, res, next) {
    try{
      //find filename in db and redirect there.
      const pool = await poolPromise;
      var findInDB = await pool.query("select count(*) as mycount from files where nameOfFile='"+req.params.name+"'");
    if (findInDB.recordset[0].mycount == 0){
        var num = Math.floor(Math.random() * 500);
        console.log(num);
        findInDB = await pool.query("select count(*) as mycount from files where fileid="+num);
        console.log(findInDB.recordset[0]);
        while (findInDB.recordset[0].mycount != 0){
        num = Math.floor(Math.random() * 500);
        findInDB = await pool.query("select count(*) as mycount from files where fileid="+num);
        console.log(num);
        console.log(findInDB.recordset[0]);
        }
        console.log(num);
        findInDB = await pool.query("insert into files values ("+num+",'"+req.params.name+"','/images/doc_placeholder.png','"+req.params.id+"')");
        findInDB = await pool.query("insert into userfiles values ("+num+",'"+req.session.email+"')");
    }
    else{
        var results = await pool.query("update files set filedata='"+req.params.id+"' where nameOfFile='"+req.params.name+"'");
        results = await pool.query("insert into userfiles values ("+num+",'"+req.session.email+"')");
        if (results.rowsAffected==1){
            console.log("Success!");
        }
        else{
            console.log("failed to save");
        }
    }
      res.redirect("/notebook/gotodoc/"+req.params.name);
    }
    catch (err) {
        console.log(err);
        next(err);
        return;;
    }
});

router.get('/savefile/:name/:id', async function(req, res, next) {
    try{
      //find filename in db and redirect there.
      const pool = await poolPromise;
      console.log(req.params.id);
      var results = await pool.query("update files set filedata='"+req.params.id+"' where nameOfFile='"+req.params.name+"'");
      if (results.rowsAffected==1){
          console.log("Success!");
      }
      else{
          console.log("failed to save");
      }
      res.redirect("/notebook/gotodoc/"+req.params.name);
    }
    catch (err) {
        console.log(err);
        next(err);
        return;;
    }
});

module.exports = router;