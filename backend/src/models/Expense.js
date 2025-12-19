const mongoose = require("mongoose");

const splitSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const expenseSchema = new mongoose.Schema(
  {
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true
    },
    paidBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    amount: {
      type: Number,
      required: true 
    },
    splitType: {
      type: String,
      enum: ["EQUAL", "EXACT", "PERCENTAGE"],
      required: true
    },
    splits: [splitSchema],
    description: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
