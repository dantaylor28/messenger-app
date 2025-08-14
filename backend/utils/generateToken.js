import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "14d",
  });

  res.cookie("jwtToken", token, {
    maxAge: 14 * 24 * 60 * 60 * 1000, // 14d in milliseconds format
    httpOnly: true, // Prevent XXS/cross-site scripting attacks
    sameSite: "strict", // Prevent CSRF/cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateToken;
