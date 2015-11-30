/// <reference path="../../../typings/tsd.d.ts" />
var userModel_1 = require('./userModel');
function userSignin(req, res) {
    var reqUser = req.body;
    userModel_1.User.findOne({ userName: reqUser.userName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else if (user !== null) {
            if (reqUser.passWord === user.passWord) {
                res.send('User Signin Successfully!');
            }
        }
        else {
            res.send('No Users Found!');
        }
    });
}
exports.userSignin = userSignin;
function userSignup(req, res) {
    var newUser = req.body;
    userModel_1.User.findOne({ userName: newUser.userName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else if (user === null || user === undefined) {
            userModel_1.User.create(newUser, function (err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('User Created Successfully!');
                }
            });
        }
        else if (user.userName === newUser.userName) {
            res.send('User Already Exits!');
        }
    });
}
exports.userSignup = userSignup;
function getUsers(req, res) {
    var newUser;
    userModel_1.User.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        else if (users.length > 0) {
            res.json(users);
        }
        else {
            res.send('No Users Found!');
        }
    });
}
exports.getUsers = getUsers;
function retriveUser(req, res) {
    var reqUser = req.body;
    userModel_1.User.findOne({ userName: reqUser.userName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else if (user !== null) {
            res.json(user);
        }
        else {
            res.send('No Users Found!');
        }
    });
}
exports.retriveUser = retriveUser;
function createUser(req, res) {
    var newUser = req.body;
    console.log(newUser);
    userModel_1.User.findOne({ userName: newUser.userName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else if (user === null || user === undefined) {
            userModel_1.User.create(newUser, function (err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('User Created Successfully!');
                }
            });
        }
        else if (user.userName === newUser.userName) {
            res.send('User Already Exits!');
        }
    });
}
exports.createUser = createUser;
function updateUser(req, res) {
    var updatedUser = req.body;
    userModel_1.User.findOne({ userName: updatedUser.userName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else if (user.userName !== updatedUser.userName) {
            res.send('No User Found!');
        }
        else {
            userModel_1.User.update(updatedUser, function (err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('User Updated Successfully!');
                }
            });
        }
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    var deleteUser = req.body;
    userModel_1.User.findOne({ userName: deleteUser.userName }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else if (user.userName !== deleteUser.userName) {
            res.send('No User Found!');
        }
        else {
            userModel_1.User.remove(deleteUser, function (err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('User Deleted Successfully!');
                }
            });
        }
    });
}
exports.deleteUser = deleteUser;
