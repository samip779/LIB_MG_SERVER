const router = require("express").Router();
const { issueBook } = require("../controllers/issueController");

router.get("/", issueBook);

module.exports = router;
