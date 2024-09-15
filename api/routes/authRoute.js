const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const salt = bycrypt.genSaltSync(10);

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password, phone } = req.body;
    await User.create({
      fname,
      lname,
      email,
      password: bycrypt.hashSync(password, salt),
      phone,
      role: "user",
    });
    res.status(201).json({ message: "user account created." });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const passOk = bycrypt.compareSync(password, user.password);
    if (passOk) {
      jwt.sign(
        { email, id: user.id },
        "asdjpoiacvnjianouqweru3094uqbpoaf34124",
        {},
        (err, token) => {
          if (err) {
            res.status(400).json("Failed to log in");
          } else {
            res.cookie("token", token).json({
              id: user._id,
              email,
            });
          }
        }
      );
    } else {
      res.status(400).json("Failed to log in");
    }
  } else {
    res.status(400).json("Account not found");
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json("Logged out");
});

module.exports = router;
