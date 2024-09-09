import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
