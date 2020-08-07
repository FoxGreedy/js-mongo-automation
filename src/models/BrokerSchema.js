const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaBrokers = new Schema({
  fake: Boolean,
  susep: String,
  branch: String,
  createdAt: Date,
  updatedAt: Date,
  user: { type: "ObjectId" },
});

module.exports = mongoose.model("brokers", SchemaBrokers);
