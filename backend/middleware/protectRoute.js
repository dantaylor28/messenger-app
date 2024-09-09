import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorised access - No token has been provided" });
    }
    // Decode the cookie using verify method & JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
