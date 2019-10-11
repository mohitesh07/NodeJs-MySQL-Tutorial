const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_passcode'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    let sql = `USE testDb;`;
    con.query(sql, (err,result)=>{
        if(err) throw err;
        console.log('testDb is in USE!');
        let sql = `CREATE TABLE employees (id INT,
            name VARCHAR(255),
            age INT(3),
            city VARCHAR(255))`;
        con.query(sql, (err,result)=>{
            if(err) throw err;
            console.log("employees TABLE CREATED!");
        });
    });
});