var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //maryam will get data from database
    // results -> JSON object containing the data from sql database
  res.render('newdoc', results);
});