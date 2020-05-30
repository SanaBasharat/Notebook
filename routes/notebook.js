var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("i am at notebook");
  //if (req.session.loggedIn) {
    //res.redirect('/notebook');
    //res.render('notebook');
  //}
  //try{
    var filePath = "./views/notebook.html";
    fs.readFile(filePath, (err, contents) => {
      console.log("aaa");
        if (err) {
            next(err);
            return;;
        }
        HTMLrender = contents.toString().replace(/<!--Email-->/g, "Sana");
        res.send(HTMLrender);
        //res.end();
    });
  // }
  // catch (err) {
  //   next(err);
  //   return;;
  // }
});

// router.get('/newdoc', function(req, res, next) {
//   console.log("i iz tiredd");
//   console.log(req.query);
//   res.render('newdoc', results);
//   res.end();
// });

module.exports = router;