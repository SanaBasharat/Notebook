var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');
const poolPromise = require('../db.js');
var myfiles = "";
var mytext = "";

async function readDB(em){
  const pool = await poolPromise;
  var results = await pool.query("select * from files where fileid in (select fileid from userfiles where emailid='"+em+"')");
  results.recordset.forEach(async element => {
    mytext += "<a href='/notebook/gotodoc/"+element.nameOfFile+"'><div class='card'><img src='"+element.imagename+"' class='macimage'><p>"+element.nameOfFile+"</p></div></a>";
  });
  return mytext;
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log("i am at notebook");
  //read Filenames from DB
  myfiles = await  readDB(req.session.email);
  var filePath = "./views/notebook.html";
  fs.readFile(filePath, async (err, contents) => {
      if (err) {
          next(err);
          return;
      }
      HTMLrender = contents.toString().replace(/<!--username-->/g, req.session.username);
      HTMLrender = HTMLrender.replace(/<!--files-->/g, myfiles);
      res.send(HTMLrender);
      res.end();
  });
});

router.post('/redirectnewdoc', async function(req, res, next) {
  try{
    res.redirect("/newdoc");
  }
  catch (err) {
      console.log(err);
      next(err);
      return;;
  }
});

router.get('/gotodoc/:id', async function(req, res, next) {
  try{
    //find filename in db and redirect there.
    const pool = await poolPromise;
    var results = await pool.query("select * from files where nameOfFile='"+req.params.id+"'");
    var filePath = "./views/newdoc.html";
    fs.readFile(filePath, async (err, contents) => {
        if (err) {
            next(err);
            return;
        }
        HTMLrender = contents.toString().replace(/<!--text-->/g, results.recordset[0].filedata);
        HTMLrender = HTMLrender.replace(/My File Name/g, req.params.id);
        res.send(HTMLrender);
        res.end();
    });
  }
  catch (err) {
      console.log(err);
      next(err);
      return;;
  }
});

module.exports = router;