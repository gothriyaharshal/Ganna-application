const mysql = require('mysql2')

// creating pool of our database, so our server do not crash
// means we are creating pool of connections here
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'akash@123',
    database: 'gaana',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
module.exports = pool