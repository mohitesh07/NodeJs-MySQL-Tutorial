const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_passcode'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    con.query(`CREATE DATABASE testDb`, (err,result) => {
        if(err) throw err;
        console.log('Database testDb created!');
    });
});