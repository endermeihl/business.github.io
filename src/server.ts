/**
 * Created by ender on 2017/6/3.
 */
import * as express from 'express';
import * as ejs from 'ejs';
//====================
const app = express();
const path = require('path');
const reqPath = "";
app.set('views', '../views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('../static'));
app.get('/', function (req, res) {
    res.render('index', {reqPath: reqPath});
});

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
