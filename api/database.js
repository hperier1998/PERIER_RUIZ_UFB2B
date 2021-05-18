let mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'otrag',
    dateStrings: true
});

connection.connect();

module.exports = connection;