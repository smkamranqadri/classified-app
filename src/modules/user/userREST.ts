/// <reference path="../../../typings/tsd.d.ts" />

import * as express          from "express";

import {User, IUser}         from './userModel';

export function getUsers (req : express.Request, res : express.Response) {
	let newUser : IUser;
	User.find((err : Error, users : Array<IUser>) => {
		if (err) {
            res.send(err);
		} else if (users.length > 0) {
			res.json(users)
		} else {
			res.send('No Users Found!')
		}
	});
}

export function retriveUser (req : express.Request, res : express.Response) {
	let reqUser : IUser = req.body;
    User.findOne({ userName: reqUser.userName }, (err : Error, user : IUser) => {
        if (err) {
            res.send(err);
        } else if (user !== null) {
			res.json(user);			
        } else {
            res.send('No Users Found!');
		}
    });
}

export function createUser (req : express.Request, res : express.Response) {
	let newUser : IUser = req.body;
	console.log(newUser);
	User.findOne({ userName: newUser.userName }, (err : Error, user : IUser) => {
        if (err) {
            res.send(err);
		} else if (user === null || user === undefined) {
			User.create(newUser, (err : Error) => {
				if (err) {
					res.send(err);
				} else {
					res.send('User Created Successfully!')
				}
			});
		} else if (user.userName === newUser.userName) {
			res.send('User Already Exits!');		
		} 
    });
}

export function updateUser (req : express.Request, res : express.Response) {
	let updatedUser : IUser = req.body;
	User.findOne({ userName: updatedUser.userName }, (err : Error, user : IUser) => {
        if (err) {
            res.send(err);
		} else if (user.userName !== updatedUser.userName) {
			res.send('No User Found!')
		} else {
			User.update(updatedUser, (err : Error) => {
				if (err) {
					res.send(err);
				} else {
					res.send('User Updated Successfully!')
				}
			});
		}
    });
}

export function deleteUser (req : express.Request, res : express.Response) {
	let deleteUser : IUser = req.body;
	User.findOne({ userName: deleteUser.userName }, (err : Error, user : IUser) => {
        if (err) {
            res.send(err);
		} else if (user.userName !== deleteUser.userName) {
			res.send('No User Found!')
		} else {
			User.remove(deleteUser, (err : Error) => {
				if (err) {
					res.send(err);
				} else {
					res.send('User Deleted Successfully!')
				}
			});
		}
    });
}