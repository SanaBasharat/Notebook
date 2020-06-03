var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var sql = require('mssql');
var bodyParser = require('body-parser');
var compression = require('compression');
//var MemoryStore = require('memorystore')(session)

var indexRouter = require('./routes/index');
var notebookRouter = require('./routes/notebook');
var newdocRouter = require ('./routes/newdoc');

var app = express();

app.use(session({secret: "blah", resave: true, saveUninitialized: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use('/', indexRouter);
app.use('/notebook', notebookRouter);
app.use('/newdoc', newdocRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err);
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.status == 404) {
    console.log(err);
    res.send("404: Page not found");
    return;
  }
  // render the error page
  console.log(err);
  res.sendStatus(err.status || 500);

  return;
});


module.exports = app;
