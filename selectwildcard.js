const mysql = require('mysql');
const con = mysql.createConnection({
    host:`localhost`,
    user: `root`,
    password: `test_passcode`,
    database: `testDb`
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`Connected at root@localhost -> testDb`);
    let sql = `SELECT * FROM employees WHERE city LIKE 'A%'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});

setTimeout(()=>{
    con.end();
},1000);