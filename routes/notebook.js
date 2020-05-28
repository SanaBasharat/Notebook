var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //maryam will get data from database
    // reults -> JSON object conatinung the data from sql database
  res.render('notebook', results );
});

router.get('/opendocument', function(req, res, next) {

    //maryam will get data from database of the specific document using the name of doucment on the query
    // reults -> JSON object conatinung the data from sql database
  res.render('notebook', results );
});
module.exports = router;