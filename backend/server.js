import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5173;

dotenv.config();

app.use(express.json()); // To parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5173/
//   res.send("Hello World!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
