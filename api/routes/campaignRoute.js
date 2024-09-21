const express = require("express");
const { authenticateUser } = require("../middlewares/authentication");
const uploadMiddleware = require("../middlewares/uploadMiddleware");
const router = express.Router();

router.post("/",authenticateUser,uploadMiddleware.array("files",2), async (req, res) => {

});