const mysql = require('mysql');
const con = mysql.createConnection({
    host:`localhost`,
    user: `root`,
    password: `test_passcode`,
    database: `testDb`
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`connected at root@localhost->testDb`);
    let sql = `SELECT * FROM employees WHERE id='1'`;
    con.query(sql,(err,result)=>{
        console.log(result);
    });
});

setTimeout(()=>{
    con.end();
},1000);