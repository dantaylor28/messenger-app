import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5173;

app.get("/", (req, res) => {
  // root route http://localhost:5173/
  res.send("Hello World!!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
