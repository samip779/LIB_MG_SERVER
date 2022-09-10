import express from "express";
import {
  register,
  listUsers,
  authUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", listUsers);
router.post("/login", authUser);
router.post("/register", register);
router.get("/profile", protect, getUserProfile);

export default router;
