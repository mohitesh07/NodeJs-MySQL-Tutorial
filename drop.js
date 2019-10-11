const mysql = require('mysql');
const con = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`test_passcode`,
    database:`testDb`
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`connected at root@localhost->testDb`);
    con.query(`DROP TABLE employees`,(err,result)=>{
        if(err) throw err;
        console.log(`employee table removed[OK]`);
    });
});

setTimeout(()=>{
    con.end();
},1000);