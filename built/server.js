/// <reference path="../typings/tsd.d.ts" />
//third party module import
var express = require("express");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
//server configuration
var app = express();
var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/classified-app');
//builtin middleware
app.use(express.static(path.join(__dirname, '../public')));
//third party middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//start server
app.listen(port, function () {
    console.log('Express started on Port : ' + port);
});
