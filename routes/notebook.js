var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("i am at notebook");
  //read Filenames from DB
  var obj = {
    username: "SanaB",
    files: [
      {filename: 'My Word File', image: '/images/doc_placeholder.png'},
      {filename: 'SanaPPTX', image: '/images/doc_placeholder.png'},
      {filename: 'Hello World', image: '/images/doc_placeholder.png'},
      {filename: 'My File', image: '/images/doc_placeholder.png'},
      {filename: 'Hello Kitty', image: '/images/doc_placeholder.png'}
    ]
  }
  var myfiles = "";
  var myusername = "";
  obj.files.forEach(element => {
    myfiles += "<div class='card'><img src='"+element.image+"' class='macimage'><p>"+element.filename+"</p></div>";
  });
  //var a = JSON.parse(obj);
  myusername = obj.username;
  console.log(obj.username);
  var filePath = "./views/notebook.html";
    fs.readFile(filePath, (err, contents) => {
        if (err) {
            next(err);
            return;
        }
        HTMLrender = contents.toString().replace(/<!--username-->/g, myusername);
        HTMLrender = HTMLrender.replace(/<!--files-->/g, myfiles);
        res.send(HTMLrender);
        //res.end();
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