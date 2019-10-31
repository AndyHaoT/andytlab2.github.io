const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'artist_directory',
    password:''
});

module.exports = pool.promise();