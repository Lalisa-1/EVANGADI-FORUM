const express = require("express");
const router = express.Router();

const { allAnswers, postAnswer } = require("../controller/answerController");

router.get("/:questionid", allAnswers);
router.post("/:questionid", postAnswer);
module.exports = router;
