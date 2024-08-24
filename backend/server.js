import express from "express";
import dotenv from "dotenv";
import authRoutes from "./auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5173;

app.get("/", (req, res) => {
  // root route http://localhost:5173/
  res.send("Hello World!!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
