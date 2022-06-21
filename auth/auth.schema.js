const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  addressLine1: String,
  city: String,
  state: String,
  zip: String,
});
const auth = mongoose.model("auth", authSchema);
module.exports = auth;
