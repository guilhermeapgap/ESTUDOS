const mysql = require('mysql')

const pool = mysql.createConnection({

    connectionLimit: 10, 
    host: 'localhost',
    user: 'root',
    password: '',
    database:'estudosnode',
    port: 3307
})


module.exports = pool