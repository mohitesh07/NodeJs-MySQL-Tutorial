const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_passcode'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('connected->root@localhost');
    con.query(`USE testDb`,(err,result)=>{
        if(err) throw err;
        console.log('DB changed @ testDb');
    });
    let sql = `DELETE FROM employees WHERE city='Delhi'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});