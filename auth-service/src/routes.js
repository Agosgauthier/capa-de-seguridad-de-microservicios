const express = require("express");
const users = require("./users");
const { generateToken } = require("./jwt");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mensaje: "Servidor funcionando"
    });
});

router.post("/create-user", (req, res) => {

    const { username, password } = req.body;

    const user = {
        username,
        password
    };

    users.push(user);

    res.status(201).json({
        message: "Usuario creado correctamente"
    });

});

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        u =>
            u.username === username &&
            u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Credenciales inválidas"
        });
    }

    const token = generateToken(user);

    res.json({
        token
    });

});

module.exports = router;