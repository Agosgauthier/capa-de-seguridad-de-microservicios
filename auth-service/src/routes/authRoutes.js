const express = require("express");

const verifyToken = require("../middleware/verifyToken");

const {
    home,
    createUser,
    login,
    profile
} = require("../controllers/authController");

const router = express.Router();

router.get("/", home);

router.post("/create-user", createUser);

router.post("/login", login);

router.get("/profile", verifyToken, profile);

module.exports = router;