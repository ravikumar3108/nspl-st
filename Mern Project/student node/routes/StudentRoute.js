const express = require("express");
const router = express.Router();
const {protectRoute} = require("../Middlewares/protectedRoute")


// router.post("/signup",protectRoute, SignupUser);
// router.post("/login", loginuser);
// router.post("/profile", userProfile);

module.exports = router;
