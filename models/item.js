const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
