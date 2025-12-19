const Expense = require("../models/Expense");
const Group = require("../models/Group");
const { updateBalance } = require("./balanceService");
const calculateSplits = require("../utils/splitCalculator");

async function addExpense(data) {
  const { groupId, paidBy, amount, splitType, splits, description } = data;

  const group = await Group.findById(groupId);
  if (!group) throw new Error("Group not found");

  const splitMap = calculateSplits(
    amount,
    splitType,
    splits,
    group.members.length
  );

  // Save expense
  const expense = await Expense.create({
    groupId,
    paidBy,
    amount,
    splitType,
    splits,
    description
  });

  // Update balances
  for (let userId in splitMap) {
    if (userId !== paidBy.toString()) {
      await updateBalance(groupId, userId, paidBy, splitMap[userId]);
    }
  }

  return expense;
}

module.exports = { addExpense };
