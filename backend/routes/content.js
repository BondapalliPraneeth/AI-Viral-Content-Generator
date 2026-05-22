const express = require("express");
const router = express.Router();
const { generateContent } = require("../controllers/contentController");
const { validateContentRequest } = require("../middleware/validate");

router.post("/generate", validateContentRequest, generateContent);

module.exports = router;
