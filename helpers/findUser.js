const { connection } = require('../database/config');

const getUserByEmail = (email, callback) => {
    if(connection) {
        connection.query(`SELECT * FROM usuarioView WHERE usuario = ?`, [email], (err, rows) => {
            if(err) {
                throw  err
            } else {
                callback(null, rows);
            }
        });
    }
}
module.exports = {
    getUserByEmail
}