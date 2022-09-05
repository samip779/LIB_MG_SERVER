const router = require("express").Router();
const { listBooks, addBook } = require("../controllers/bookController");

router.get("/", listBooks);
router.post("/add", addBook);

module.exports = router;
