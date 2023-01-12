import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

const secret = "secret";

export const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ username });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      {
        username: oldUser.username,
        id: oldUser._id,
      },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Login Failed" });
  }
};

export const signup = async (req, res) => {
  const { email, username, pass, firstname, lastname } = req.body;

  try {
    const oldUser = await UserModel.findOne({ username });

    if (oldUser) return res.status(400).json({ message: "User exists" });

    const hashedPass = await bcrypt.hash(pass, 12);

    const result = new UserModel({
      email: email,
      username: username,
      pass: hashedPass,
      firstname: firstname,
      lastname: lastname,
    });

    await result.save();

    const token = jwt.sign(
      {
        username: result.username,
        firstname: result.firstname,
        lastname: result.lastname,
        id: result._id,
      },
      secret,
      { expiresIn: "1h" }
    );

    res.status(201).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: "Register Failed" });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find();

    console.log(users);

    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
