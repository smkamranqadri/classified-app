/// <reference path="../../../typings/tsd.d.ts" />
var postModel_1 = require('./postModel');
function newpost(req, res) {
    var newpost = req.body;
    console.log(newpost);
    postModel_1.Post.create(newpost, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Post Submitted Successfully!');
        }
    });
}
exports.newpost = newpost;
function posts(req, res) {
    postModel_1.Post.find({})
        .exec(function (err, posts) {
        if (err) {
            res.send(err);
        }
        else if (posts.length > 0) {
            res.json(posts);
        }
        else {
            res.send('No Post Found!');
        }
    });
}
exports.posts = posts;
