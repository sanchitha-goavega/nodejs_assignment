const express = require("express");
const router = express.Router();
const authController = require("./controller");
const authCheck = require("./authCheck");
const validation = require("../middlewares/validationMiddleware");
const userSchema = require("../validations/userValidation");

router.post("/register", validation(userSchema), authController.register);
router.post("/login", authController.login);
router.put("/update", authCheck, authController.update);

module.exports = router;
