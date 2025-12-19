const User = require("../models/User");

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getAllUsers(req, res) {
  const users = await User.find();
  res.json(users);
}

module.exports = { createUser, getAllUsers };
