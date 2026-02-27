const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

// Create a JWTSEcret

const protectRoute = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (decoded) {
        let result = await Users.findOne({ _id: decoded.userId });
        req.user = result;
        next();
      } else {
        console.log("err", err);
        next();
      }
    });
    if (!token) {
      res.status({
        status: false,
        msg: "token missing",
      });
      throw new Error("User is not authorized or token is missing");
    }
  } else {
    res.status({
      status: false,
      msg: "something wrong",
    });
  }
};

module.exports = { protectRoute };
