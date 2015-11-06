/// <reference path="../../../typings/tsd.d.ts" />

import * as mongoose         from "mongoose";

let userSchema : mongoose.Schema = new mongoose.Schema({
	userName : {
		type : String,
		required : true
	},
	passWord : {
		type : String,
		required : true
	}
});

export interface IUser extends mongoose.Document {
	userName  : string,
	passWord : string
}

export let User : mongoose.Model <IUser> = mongoose.model <IUser> ('User', userSchema);