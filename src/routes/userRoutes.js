import express from "express";
import {
  register,
  listUsers,
  authUser,
  getUserProfile,
} from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, admin, listUsers);
router.post("/login", authUser);
router.post("/register", register);
router.get("/profile", protect, getUserProfile);

export default router;
