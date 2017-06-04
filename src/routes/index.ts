/**
 * Created by ender on 2017/6/4.
 */
import * as express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {reqPath: ""});
});