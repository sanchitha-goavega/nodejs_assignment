const yup = require("yup");

const updateSchema = yup.object({
  addressLine1: yup.string().min(8),
  city: yup.string(),
  state: yup.string().min(8),
  zip: yup.string().min(6),
});

//userSchema.validate();

module.exports = updateSchema;
