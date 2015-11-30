/// <reference path="../../../typings/tsd.d.ts" />
var express = require("express");
var postController = require('./postController');
var router = express.Router();
router.post('/newpost', postController.newpost);
router.get('/posts', postController.posts);
module.exports = router;
