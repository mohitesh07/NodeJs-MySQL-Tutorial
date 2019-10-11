const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_passcode'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('CONNECTION ESTABLISHED');
    let sql = `USE testDb`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('DATABASE CHANGED TO testDb');
        let sql = `INSERT INTO employees (id,name,age,city)
        VALUES
        (1,'Mohitesh',21,'Kolkata');`;
        con.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('ROW INSERTED');
            let sql = `SELECT * FROM employees;`;
            con.query(sql,(err,result)=>{
                if(err) throw err;
                console.log(result);
            });
        });
    });
});