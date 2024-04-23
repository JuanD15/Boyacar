const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'database-1.cd40sksmguk1.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'admin123',
    database: 'boyacarDB',
});

module.exports = connection;