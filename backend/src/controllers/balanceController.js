const Balance = require("../models/Balance");

async function getBalancesByGroup(req, res) {
  const balances = await Balance.find({
    groupId: req.params.groupId
  })
    .populate("fromUser toUser");

  res.json(balances);
}

module.exports = { getBalancesByGroup };
