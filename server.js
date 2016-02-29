var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();

var server = app.listen(8000, function(){
  console.log('listenin on 8000');
})
