const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: [true, "Please provide Phone number"],
    minlength: 10,
    maxlength: 10,
  },
  img: {
    type: String,
    required: true,
  },
  proof: {
    type: String,
    required: true,
  },
  goal: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  acceptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
