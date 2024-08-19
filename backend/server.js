const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // root route http://localhost:5173/
  res.send("Hello World!!");
});

app.listen(5173, () => console.log("Server running on port 5173"));
