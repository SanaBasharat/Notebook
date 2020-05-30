var express = require('express');
var router = express.Router();
var sql = require('mssql');
const poolPromise = require('../db.js');
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
  var uname, em, pass, found;
  //try{
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sana',
        password: '12345678',
        server: 'DESKTOP-PFBRNRR', 
        database: 'notebookdb',
        options:{
            "enableArithAbort": true
        },
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from users', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

    async () => {
      try {
          // make sure that any items are correctly URL encoded in the connection string
          await sql.connect('mssql://sa:12345678@localhost/notebookdb')
          const result = await mysql.query`select * from users`
          console.log(result)
      } catch (err) {
          // ... error checks
      }
  }
  // }
  // catch (err) {
  //   next(err);
  //   return;;
  // }
//});

// router.post('/notebook', function(req, res, next) {
//   console.log("111111111")
//   //res.json({name: ["doc1", "doc2", "doc3", "doc4"]});
//   res.render('notebook',{ name: ["doc1", "doc2", "doc3", "doc4"]});
//   //res.send({name: ["doc1", "doc2", "doc3", "doc4"]});
//   res.end();
// });
module.exports = router;
