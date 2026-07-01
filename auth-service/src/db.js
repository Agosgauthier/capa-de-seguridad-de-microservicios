const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "jwtuser",
    password: "123456",
    database: "microservicios_jwt"
});

connection.connect((err) => {
    if (err) {
        console.log("Error conectando a MySQL");
        console.log(err);
        return;
    }

    console.log("MySQL conectado correctamente");
});

module.exports = connection;