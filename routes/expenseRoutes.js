const express = require('express');
const { addExpense, getExpenses, analyzeSpending } = require('../controllers/expenseController');

const router = express.Router();

router.post('/expenses', addExpense);
router.get('/expenses', getExpenses);
router.get('/expenses/analysis', analyzeSpending);

module.exports = router;
