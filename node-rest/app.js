var express = require('express');
var fs = require('fs');
var cors = require('cors');
var multipart = require('connect-multiparty');
var bodyParser = require('body-parser');
var app = express();

var claims = require('./routes/courses');

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/ezyClaims', claims);
app.listen(3000);