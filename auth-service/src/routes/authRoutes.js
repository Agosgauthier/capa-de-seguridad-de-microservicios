const express = require("express");

const {
    home,
    createUser,
    login
} = require("../controllers/authController");

const router = express.Router();

router.get("/", home);

router.post("/create-user", createUser);

router.post("/login", login);

module.exports = router;