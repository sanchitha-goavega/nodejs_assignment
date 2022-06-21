const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
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
