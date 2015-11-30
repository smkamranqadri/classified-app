/// <reference path="../../../typings/tsd.d.ts" />

import * as express          from "express";
import * as postController   from './postController';

var router: express.Router = express.Router();

router.post('/newpost', postController.newpost);

router.get('/posts', postController.posts);

export = router;