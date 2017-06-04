/**
 * Created by ender on 2017/6/3.
 */
import * as express from 'express';
import * as ejs from 'express';
import * as log4js from 'log4js';

const app = express();
const reqPath = "";
var log4js = require("./util/log4j");
app.set('views', '../views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('../static'));