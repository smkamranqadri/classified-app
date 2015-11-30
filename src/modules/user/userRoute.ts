/// <reference path="../../../typings/tsd.d.ts" />

import * as express          from "express";
import * as userController   from './userController';

var router: express.Router = express.Router();

router.post('/signin', userController.userSignin);

router.post('/signup', userController.userSignup);

/*router.get('/user', userController.getUsers);

router.get('/user/:user', userController.retriveUser);

router.post('/user', userController.createUser);

router.put('/user', userController.updateUser);

router.delete('/user', userController.deleteUser);*/

export = router;