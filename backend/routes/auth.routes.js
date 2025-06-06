import express from "express";
import {
  // AuthUser,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/profile", protectRoute, updateProfile);

// router.get("/auth-user", protectRoute, AuthUser);

export default router;
