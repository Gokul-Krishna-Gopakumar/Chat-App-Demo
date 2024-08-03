const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

//create JWT for user in database
const creatToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

//Controller for registering a user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user) return res.status(400).json("User already exists");

    if (!name || !email || !password)
      return res.status(400).json("ALl fields are required");

    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    if (!validator.isStrongPassword(password))
      return res.status(400).json("Password is not strong enough. Try again.");

    user = new userModel({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = creatToken(user._id);

    res.status(200).json({ _id: user._id, name, email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Controller for user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) return res.status(400).json("Invalid email or password");

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid)
      return res.status(400).json("Invalid email or password");

    const token = creatToken(user._id);

    res.status(200).json({ _id: user._id, name: user.name, email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { registerUser, userLogin };
