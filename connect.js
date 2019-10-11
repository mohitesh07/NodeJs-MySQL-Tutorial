const mysql = require('mysql');
const con = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `test_passcode`
});

con.connect((err) => {
    if(err) throw err;
    console.log(`Connected!`);
});