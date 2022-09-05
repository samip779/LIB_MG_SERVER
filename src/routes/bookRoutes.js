const router = require("express").Router();
const { listBooks } = require("../controllers/bookController");

router.get("/", listBooks);

module.exports = router;
