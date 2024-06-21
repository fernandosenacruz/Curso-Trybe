const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Bcde1234',
    database: 'sakila',
    port: '3306'  
  });

module.exports = connection;