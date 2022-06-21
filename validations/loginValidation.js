const yup = require("yup");

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

//userSchema.validate();

module.exports = loginSchema;
