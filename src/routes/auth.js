const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/authController");

router.get("/", authController.index);
module.exports = router;
