const express = require("express");
const verifyToken = require("./middleware/verifyToken");

const router = express.Router();

router.get(
    "/books",
    verifyToken,
    (req, res) => {

        res.json([
            {
                id: 1,
                titulo: "El Principito"
            },
            {
                id: 2,
                titulo: "Don Quijote"
            },
            {
                id: 3,
                titulo: "Cien Años de Soledad"
            }
        ]);

    }
);

module.exports = router;