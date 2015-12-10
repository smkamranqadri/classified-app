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
		filetype: {
			type: String,
			required: true
		},
		filename: {
			type: String,
			required: true
		},
		filesize: {
			type: String,
			required: true
		},
		base64: {
			type: String,
			required: true
		}	
	}
});

export interface IPost extends mongoose.Document {
	title: string,
	description: string,
	price: string,
	image: {
		filetype: string,
		filename: string,
		filesize: string,
		base64: buffer
	}
}

export let Post: mongoose.Model<IPost> = mongoose.model<IPost>('Post', postSchema);