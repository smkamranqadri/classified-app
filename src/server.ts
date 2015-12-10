/// <reference path="../typings/tsd.d.ts" />

//third party module import
import * as express      from "express";
import * as morgan       from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser   from "body-parser";
import * as path         from "path";
import * as mongoose     from "mongoose";

//server configuration
let app   : express.Express = express();
let port  : number          = process.env.PORT || 3500;
mongoose.connect('mongodb://localhost/classified-app');

//custom module import
// let userRouter: express.Router = require('./modules/user/userRoute');
import userRouter = require('./modules/user/userRoute');
import postRouter = require('./modules/post/postRoute');

//builtin middleware
app.use(express.static(path.join(__dirname, '../public')));

//third party middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json({limit: '500kb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));

//customer mounted middleware for routing
app.use('/user', userRouter);
app.use('/post', postRouter);

//start server
app.listen(port, () => {
  console.log('Express started on Port : ' + port);
});