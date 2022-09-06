import express from "express";
import { issueBook } from "../controllers/issueController.js";

const router = express.Router();

router.post("/", issueBook);

export default router;
