const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaOrder = new Schema({
  status: String,
  discounts: Array,
  createdAt: Date,
  updatedAt: Date,
  customer: { type: "ObjectId" },
  representative: { type: "ObjectId" },
});

module.exports = mongoose.model("orders", SchemaOrder);
