const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  phone: {
    type: String,
    required: [true, "Please provide Phone number"],
    minlength: 10,
    maxlength: 10,
  },
  img: {
    type: String,
    required: [true, "Please provide a image"],
  },
  proof: {
    type: String,
    required: [true, "Please provide a proof letter"],
  },
  goal: {
    type: mongoose.Schema.Types.Decimal128,
    required: [true, "Please provide a goal"],
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
  acceptedAt: {
    type: Date,
    default: Date.now,
  },
  holder: {
    type: String,
    required: [true, "Please provide a bank holder name"],
  },
  bankNumber: {
    type: String,
    required: [true, "Please provide a bank number"],
  },
  accNumber: {
    type: String,
    required: [true, "Please provide a bank acc number"],
  },
  swift: {
    type: String,
    required: [true, "Please provide a swift code"],
  },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
