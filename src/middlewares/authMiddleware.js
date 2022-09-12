import jwt from "jsonwebtoken";
import ApiError from "../errors/ApiError.js";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    next();
  }
  if (!token) {
    throw ApiError.badRequest("Not authorized, no token");
  }
};

const admin = (req, res, next) => {
  if (!req.user.admin) {
    throw ApiError.badRequest("You are not admin");
  } else {
    next();
  }
};

export { protect, admin };
