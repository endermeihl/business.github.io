/**
 * Created by ender on 2017/6/3.
 */

import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: '192.168.1.101',
    user: 'root',
    password: '110810',
    database: 'mysql'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
//关闭连接
connection.end();