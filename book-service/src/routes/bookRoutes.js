const express = require("express");

const verifyToken = require("../middleware/verifyToken");

const {
    getBooks
} = require("../controllers/bookController");

const router = express.Router();

router.get(
    "/books",
    verifyToken,
    getBooks
);

module.exports = router;