const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      next();
    } else {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Token Failed",
    });
  }
};

module.exports = protect;
