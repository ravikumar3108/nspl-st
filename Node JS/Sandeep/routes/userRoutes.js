const express = require("express");
const router = express.Router();
const {
  Signup,
  LoginUser,
  DeleteUser,
  AllUsers,
} = require("../controllers/userController");

router.post("/signup", Signup);
router.post("/LoginUser", LoginUser);
router.delete("/delete/:id", DeleteUser);
router.get("/getUsers", AllUsers);

module.exports = router;
