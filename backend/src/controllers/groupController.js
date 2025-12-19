const Group = require("../models/Group");
const User = require("../models/User");

async function createGroup(req, res) {
  try {
    const { name, members, createdBy } = req.body;

    const group = await Group.create({
      name,
      members,
      createdBy
    });

    await User.updateMany(
      { _id: { $in: members } },
      { $push: { groups: group._id } }
    );

    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getGroup(req, res) {
  const group = await Group.findById(req.params.id).populate("members");
  res.json(group);
}

module.exports = { createGroup, getGroup };
