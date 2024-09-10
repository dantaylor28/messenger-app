import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();
// ProtectRoute is a middleware used to authenticate users ensuring they are allowed to send messages.
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
