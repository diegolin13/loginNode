const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'trigarante2020-1.cypym5wo7yt3.us-east-1.rds.amazonaws.com',
    user     : 'mperez',
    password : 'UUpzNvi9huoAF4SXMJ',
    database: 'trigarante2020-Pruebas',
    timezone: 'GMT-5'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error connecting: ' + err.stack);
    }

    console.log('connected to DB ' + connection.threadId);
});

module.exports = {
    connection
}