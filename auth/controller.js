const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { exists } = require("./auth.schema.js");
const auth = require("./auth.schema.js");

//let users = [];

const register = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    addressLine1,
    city,
    state,
    zip,
  } = req.body;

  if (!email || !password) {
    res.status(200);
    throw new Error("Email / Password required...!!!");
  }
  let user = {
    email,
    password,
    firstName,
    lastName,
    addressLine1,
    city,
    state,
    zip,
  };
  user.password = bcrypt.hashSync(password, 10);
  // users = [user, ...users];
  //console.log("new user", user);
  await auth.create(user);
  res.json({ success: true, message: "succefully registered", status: true });
};

const login = async (req, res, next) => {
  // console.log(req);
  const { email, password } = req.body;
  if (!email || !password) {
    next(new Error("Email/password required"));
    return;
  }

  const user = await auth.findOne({ email });
  // console.log(user);
  if (!user) {
    res.status(400);
    next(new Error("Invalid Credentialssss"));
    return;
  }
  // console.log(password + "||" + user.password);
  const passwordMatched = bcrypt.compareSync(password, user.password);

  if (!passwordMatched) {
    res.status(403);
    next(new Error("Invalid credentials"));
    return;
  }

  const token = jwt.sign({ email }, process.env.jwt_SECRET);
  res.json({ success: true, token });
};

const update = async (req, res) => {
  const { addressLine1, city, state, zip } = req.body;
  const email = req.user.email;
  const updateUser = await auth.findOneAndUpdate(
    { email },
    { addressLine1, city, state, zip },
    { new: true }
  );

  res.json({ success: true, users: updateUser });
};

module.exports = {
  register,
  login,
  update,
};
