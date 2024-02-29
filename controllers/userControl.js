const users = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { userName, email, password } = req.body;
  // console.log(req);
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(400).json("This email already exist");
      console.log(existingUser);
    } else {
      const newUser = new users({
        userName,
        email,
        password,
      });
      // save the data in mongodb
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`Register api failed ${err}`);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const existUser = await users.findOne({ email, password });
    if (existUser) {
      const token = jwt.sign({ _id: existUser._id }, "h9a8r0i9m8o7o3r5t6h4i");
      console.log(token);
      res.status(200).json({ user: existUser, token });
    } else {
      res.status(404).json("incorrect email or password");
    }
  } catch (err) {
    res.status(401).json(`Login api failed${err}`);
  }
};
