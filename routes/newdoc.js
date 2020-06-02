var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("i am at newdoc");
    res.render("newdoc");
});

module.exports = router;