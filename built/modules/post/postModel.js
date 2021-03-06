/// <reference path="../../../typings/tsd.d.ts" />
var mongoose = require("mongoose");
var postSchema = new mongoose.Schema({
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
exports.Post = mongoose.model('Post', postSchema);
