import express from "express";
import {
  register,
  listUsers,
  listUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", listUsers);
router.get("/:id", listUser);
router.post("/register", register);

export default router;
