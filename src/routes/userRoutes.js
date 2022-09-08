import express from "express";
import {
  register,
  listUsers,
  authUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", listUsers);
router.post("/login", authUser);
router.post("/register", register);

export default router;
