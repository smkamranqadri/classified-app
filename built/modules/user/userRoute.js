/// <reference path="../../../typings/tsd.d.ts" />
var express = require("express");
var userController = require('./userController');
var router = express.Router();
router.post('/signin', userController.userSignin);
router.post('/signup', userController.userSignup);
module.exports = router;
