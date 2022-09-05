const router = require("express").Router();
const { issueBook } = require("../controllers/issueController");

router.post("/", issueBook);

module.exports = router;
