const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_passcode'
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`mysql-server connected at root@localhost`);
    con.query(`USE testDb`,(err,result)=>{
        if(err) throw err;
        console.log(`DB changed current db -> testDb`);
    });
    let sql = `UPDATE employees SET city='Delhi' WHERE city='Kolkata'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result.affectedRows + '-> record(s) updated');
    });
});