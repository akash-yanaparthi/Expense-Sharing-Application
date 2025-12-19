const Balance = require("../models/Balance");

async function updateBalance(groupId, fromUser, toUser, amount) {
  if (fromUser.toString() === toUser.toString()) return;

  const existing = await Balance.findOne({
    groupId,
    fromUser,
    toUser
  });

  if (existing) {
    existing.amount += amount;
    if (existing.amount <= 0) {
      await Balance.deleteOne({ _id: existing._id });
    } else {
      await existing.save();
    }
  } else {
    await Balance.create({
      groupId,
      fromUser,
      toUser,
      amount
    });
  }
}

module.exports = { updateBalance };
