const db = require("../db");
const { generateToken } = require("../jwt");

const home = (req, res) => {
    res.json({
        mensaje: "Servidor funcionando"
    });
};

const createUser = (req, res) => {

    const { username, password } = req.body;

    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password],
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: "Error al crear usuario"
                });
            }

            res.status(201).json({
                message: "Usuario creado correctamente"
            });

        }
    );

};

const login = (req, res) => {

    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    message: "Error al iniciar sesión"
                });
            }

            if (results.length === 0) {
                return res.status(401).json({
                    message: "Credenciales inválidas"
                });
            }

            const user = results[0];

            const token = generateToken(user);

            res.json({
                token
            });

        }
    );

};

module.exports = {
    home,
    createUser,
    login
};