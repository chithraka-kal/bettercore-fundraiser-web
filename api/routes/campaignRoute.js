import express from "express";
import { authenticateUser } from "../middlewares/authentication.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import Campaign from "../models/Campaign.js";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  uploadMiddleware.fields([
    { name: "img", maxCount: 1 },
    { name: "proof", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const img = req.files["img"][0].filename;
      const proof = req.files["proof"][0].filename;
      const {
        name,
        description,
        phone,
        goal,
        holder,
        bankName,
        accNumber,
        swift,
      } = req.body;
      const campDoc = await Campaign.create({
        name,
        description,
        phone,
        goal,
        holder,
        bankName,
        accNumber,
        swift,
        createdBy: req.user._id,
        img,
        proof,
      });
      res.status(201).json(campDoc);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
);

export default router;
