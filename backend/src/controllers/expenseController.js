const { addExpense } = require("../services/expenseService");

async function createExpense(req, res) {
  try {
    const expense = await addExpense(req.body);
    res.status(201).json({ success: true, expense });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = { createExpense };
