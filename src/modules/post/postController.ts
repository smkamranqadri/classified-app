/// <reference path="../../../typings/tsd.d.ts" />

import * as express          from "express";

import {Post, IPost}         from './postModel';

export function newpost(req: express.Request, res: express.Response) {
	let newpost: IPost = req.body;
	console.log(newpost);
    Post.create(newpost, (err: Error) => {
		if (err) {
			res.send(err);
		} else {
			res.send('Post Submitted Successfully!')
		}
	});
}

export function posts(req: express.Request, res: express.Response) {
	Post.find({})
	//.limit(1)
	//.skip(1)
	.exec((err: Error, posts: Array<IPost>) => {
		if (err) {
            res.send(err);
		} else if (posts.length > 0) {
			res.json(posts)
		} else {
			res.send('No Post Found!')
		}
	});
}