const express = require("express");
const { authenticateUser } = require("../middlewares/authentication");
const router = express.Router();
const User = require("../models/User");

router.route("/").get(authenticateUser, async (req, res) => {
  return res.status(200).json({
    id: req.user._id,
    email: req.user.email,
    fname: req.user.fname,
    lname: req.user.lname,
    role: req.user.role,
  });
});

module.exports = router;
