var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("here");
    console.log(req.query);
    res.render('index',{ name:'sana'});
    res.end()
});

module.exports = router;
