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
var port = process.env.PORT || 3500;
mongoose.connect('mongodb://localhost/classified-app');
//custom module import
// let userRouter: express.Router = require('./modules/user/userRoute');
var userRouter = require('./modules/user/userRoute');
var postRouter = require('./modules/post/postRoute');
//builtin middleware
app.use(express.static(path.join(__dirname, '../public')));
//third party middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));
//customer mounted middleware for routing
app.use('/user', userRouter);
app.use('/post', postRouter);
//start server
app.listen(port, function () {
    console.log('Express started on Port : ' + port);
});
