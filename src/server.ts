/**
 * Created by ender on 2017/6/3.
 */
import * as express from 'express';
//====================
const app = express();
app.get('/', function (req, res) {
    res.send('hello world!');
});

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
