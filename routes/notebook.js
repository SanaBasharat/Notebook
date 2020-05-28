var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //maryam will get data from database
    // results -> JSON object containing the data from sql database
  res.render('notebook', {name: ["doc1", "doc2", "doc3", "doc4"]});
  
});

router.get('/opendocument', function(req, res, next) {

    //maryam will get data from database of the specific document using the name of doucment on the query
    // results -> JSON object conatinung the data from sql database
  res.render('notebook', results);
  
});
module.exports = router;