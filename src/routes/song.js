const express = require("express");
const router = express.Router();
const songController = require("../app/controllers/songController");

router.get("/", songController.index);
router.post("/add", songController.add);
router.put("/:id/edit", songController.edit);
router.delete("/:id/delete", songController.delete);

module.exports = router;
