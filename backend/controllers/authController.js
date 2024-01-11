const User = require("../database/model/userModel");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

const signIn = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    console.log(user);
    if (!user) {
      return res.status(400).send("email does not exist");
    }
    const verifyPassword = await user.comparePassword(password);

    if (!verifyPassword) {
      return res.status(400).send("password does not match");
    }
    let token = jwt.sign({ _id: user._id }, "bdhbcjkvndlkjmlakslkamcmchbd", {
      expiresIn: "24h",
    });
    res.status(200).send({
      token,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    return res.status(400).send("login failed");
  }
};

const register = async (req, res) => {
  let { email, password, username } = req.body;
  console.log(req.body);
  try {
    if (!username) {
      return res.status(400).send("username is required");
    }
    if (!email) {
      return res.status(400).send("email is required");
    }
    if (!validator.validate(email)) {
      return res.status(400).send("enter a valid email");
    }
    if (!password || password.length < 6) {
      return res.status(400).send("enter valid password");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("taken", userExists);
      return res.status(400).send("email is taken");
    }
    const user = await new User({
      email,
      username,
      password,
    });
    await user.save();
    return res.status(200).send("user added successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).send("error creating user");
  }
};

module.exports = {
  signIn,
  register,
};
