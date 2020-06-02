var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("i am at notebook");
    var filePath = "./views/notebook.html";
    fs.readFile(filePath, (err, contents) => {
        if (err) {
            next(err);
            return;;
        }
        HTMLrender = contents.toString().replace(/<!--Email-->/g, req.session.username);
        res.send(HTMLrender);
        console.log("done");
    });
});

router.post('/redirectnewdoc', async function(req, res, next) {
  console.log("i iz tiredd");
  try{
    res.redirect("/newdoc");
  }
  catch (err) {
      console.log(err);
      next(err);
      return;;
  }
});

module.exports = router;