const express = require("express");
const router = express.Router();
const authController = require("./controller");
const authCheck = require("./authCheck");
const validation = require("../middlewares/validationMiddleware");
const userSchema = require("../validations/userValidation");
const loginSchema = require("../validations/loginValidation");
const updateSchema = require("../validations/updateValidation");

router.post("/register", validation(userSchema), authController.register);
router.post("/login", validation(loginSchema), authController.login);
router.put(
  "/update",
  validation(updateSchema),
  authCheck,
  authController.update
);

module.exports = router;
