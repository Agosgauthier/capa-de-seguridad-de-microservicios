const jwt = require("jsonwebtoken");

const SECRET = "mi_clave_super_secreta";

function verifyToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Token inválido"
        });

    }
}

module.exports = verifyToken;