const {
  addExpense,
  getExpenses,
  analyzeSpending,
} = require("../model/expenseModel");

exports.addExpense = (req, res) => {
  const { category, amount, date } = req.body;

  if (!category || !amount || !date) {
    return res
      .status(400)
      .json({ status: "error", error: "All fields are required" });
  }
  if (amount <= 0) {
    return res
      .status(400)
      .json({ status: "error", error: "Amount must be positive" });
  }

  const expense = { category, amount, date: new Date(date).toISOString() };
  addExpense(expense);
  res.status(201).json({ status: "success", data: expense });
};

exports.getExpenses = (req, res) => {
  const filters = {
    category: req.query.category,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
  };
  const expenses = getExpenses(filters);
  res.json({ status: "success", data: expenses });
};

exports.analyzeSpending = (req, res) => {
  const analysis = analyzeSpending();
  res.json({ status: "success", data: analysis });
};
