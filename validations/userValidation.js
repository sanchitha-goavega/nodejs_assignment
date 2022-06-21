const yup = require("yup");

const userSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().min(2).required(),
  password: yup.string().min(8).required(),

  email: yup.string().email().required(),
  addressLine1: yup.string().min(8).required(),
  city: yup.string().min(8).required(),
  state: yup.string().min(8).required(),
  zip: yup.string().min(6).required(),
});

//userSchema.validate();

module.exports = userSchema;
