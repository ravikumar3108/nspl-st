const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  profile,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

router.post("/signup", signup);
router.post("/login", login);
router.post("/profile", profile);
router.delete("/deleteUser/:id", deleteUser);
router.post("/update/:id", updateUser);

module.exports = router;
