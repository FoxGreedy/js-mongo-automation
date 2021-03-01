const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaCustomer = new Schema({
  firstName: String,
  fullName: String,
  cellphone: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  cpf: {
    number: String,
  },
  user: { type: "ObjectId" },
  faceMatchPercentage: String,
});

module.exports = mongoose.model("customers", SchemaCustomer);
