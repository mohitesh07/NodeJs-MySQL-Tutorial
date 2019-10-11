const mysql = require('mysql');
const con = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`test_passcode`
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`mysql-server connection established -> root@localhost`);
    con.query(`USE testDb`,(err,result)=>{
        if(err) throw err;
        console.log(`DB changed -> testDb`);
    });
    con.query(`SELECT * FROM employees`,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});

setTimeout(()=>{
    con.end();
},1000);