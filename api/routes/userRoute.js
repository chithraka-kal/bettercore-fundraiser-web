const express = require("express");
const { authenticateUser } = require("../middlewares/authentication");
const router = express.Router();
const User = require("../models/User");

router.route("/").get(authenticateUser, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (user) {
    return res.status(200).json({
      id: user._id,
      email: user.email,
      fname: user.fname,
      lname: user.lname,
      role: user.role,
    });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
