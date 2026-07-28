const { verifyToken } = require("../jwt");

function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const payload = verifyToken(token);

        req.user = payload;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Token inválido"
        });

    }

}

module.exports = authMiddleware;