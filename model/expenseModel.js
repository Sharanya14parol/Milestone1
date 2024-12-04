const expenses = [];

module.exports = {
    
    addExpense: (expense) => {
        expenses.push(expense);
    },
    getExpenses: (filters) => {
        let filteredExpenses = expenses;

        if (filters.category) {
            filteredExpenses = filteredExpenses.filter(exp => exp.category === filters.category);
        }
        if (filters.startDate && filters.endDate) {
            filteredExpenses = filteredExpenses.filter(exp => 
                new Date(exp.date) >= new Date(filters.startDate) && 
                new Date(exp.date) <= new Date(filters.endDate)
            );
        }
        return filteredExpenses;
    },

    analyzeSpending: () => {
        const categoryTotals = {};
        expenses.forEach(exp => {
            categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
        });

        const totalByCategory = Object.entries(categoryTotals).map(([category, total]) => ({
            category,
            total
        }));

        const highestSpendingCategory = totalByCategory.reduce((max, current) => 
            current.total > max.total ? current : max, { category: '', total: 0 });

        return { totalByCategory, highestSpendingCategory };
    },
   
    getAllExpenses: () => expenses
};
