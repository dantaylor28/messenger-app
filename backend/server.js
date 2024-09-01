import express from "express";
import dotenv from "dotenv";
import authRoutes from "./auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5173;

dotenv.config();

app.use("/api/auth", authRoutes);

app.use(express.json()); // To parse the incoming requests with JSON payloads (from req.body)

// app.get("/", (req, res) => {
//   // root route http://localhost:5173/
//   res.send("Hello World!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
