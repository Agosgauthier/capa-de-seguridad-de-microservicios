const express = require("express");

const verifyToken = require("../middleware/verifyToken");

const {
    getUsers
} = require("../controllers/userController");

const router = express.Router();

router.get(
    "/users",
    verifyToken,
    getUsers
);

module.exports = router;