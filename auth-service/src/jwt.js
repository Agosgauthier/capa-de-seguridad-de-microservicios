const jwt = require("jsonwebtoken");

const SECRET = "mi_clave_super_secreta";

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        SECRET,
        {
            expiresIn: "1h"
        }
    );
}

function verifyToken(token) {
    return jwt.verify(token, SECRET);
}

function decodeToken(token) {
    try {
        return jwt.decode(token);
    } catch (error) {
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken,
    decodeToken,
    SECRET
};