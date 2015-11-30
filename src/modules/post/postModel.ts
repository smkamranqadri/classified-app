/// <reference path="../../../typings/tsd.d.ts" />

import * as mongoose         from "mongoose";

let postSchema: mongoose.Schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

export interface IPost extends mongoose.Document {
	title: string,
	description: string,
	price: string,
	image: string
}

export let Post: mongoose.Model<IPost> = mongoose.model<IPost>('Post', postSchema);