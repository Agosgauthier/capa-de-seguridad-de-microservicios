const express = require("express");
const verifyToken = require("./middleware/verifyToken");

const router = express.Router();

router.get(
    "/users",
    verifyToken,
    (req, res) => {

        res.json([
            {
                id: 1,
                nombre: "Juan"
            },
            {
                id: 2,
                nombre: "Ana"
            }
        ]);

    }
);

module.exports = router;