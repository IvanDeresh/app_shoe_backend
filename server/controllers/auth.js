import bcrypt from "bcrypt";
import User from "../models/User.js";
export const registerController = async (req, res) => {
  try {
    const { firstName, email, password, balance } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      email,
      password: passwordHash,
      balance,
    });
    const savedUser = await newUser.save();
    const responseUser = { ...savedUser.toObject() };
    delete responseUser.password;
    res.status(201).json("success registration");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    delete user.password;
    res.status(200).json("success loginig");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
