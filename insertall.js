const mysql = require(`mysql`);
const con = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`test_passcode`
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`CONNECTED TO mysql-server@root`);
    let sql = `USE testDb`;
    con.query(sql,(err,result)=>{ if(err) throw err; });
    sql = `INSERT INTO employees (id,name,age,city) VALUES ?`;
    let values = [
        ['2','Yamini Agarwal','18','Kolkata'],
        ['3','Gautam Agarwal','55','Kolkata'],
        ['4','Rupa Agarwal','45','Kolkata']
    ];
    con.query(sql,[values],(err,result)=>{
        if(err) throw err;
        console.log(`Number of records inserted -> 3`);
    });
});