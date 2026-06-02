const jwt = require("jsonwebtoken");

const SECRET = "mi_clave_super_secreta";

function generateToken(user) {
    return jwt.sign(
        {
            username: user.username
        },
        SECRET,
        {
            expiresIn: "1h"
        }
    );
}

module.exports = {
    generateToken,
    SECRET
};