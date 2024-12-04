const cron = require('node-cron');
const { getAllExpenses } = require('../model/expenseModel');

const setupCronJobs = () => {
    cron.schedule('* 0 * * 0', () => {
        const allExpenses = getAllExpenses();
        console.log('Weekly Summary:', allExpenses);
    });

    cron.schedule('0 0 1 * *', () => {
        const allExpenses = getAllExpenses();
        console.log('Monthly Summary:', allExpenses);
    });
};

module.exports = setupCronJobs;
