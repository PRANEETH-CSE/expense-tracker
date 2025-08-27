const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: String,
  date: String,
  amount: Number
});

const monthSchema = new mongoose.Schema({
  budget: Number,
  spend: Number,
  transactions: [transactionSchema]
});

const yearSchema = new mongoose.Schema({}, { strict: false }); 

const expenseSchema = new mongoose.Schema({
  data: {
    type: Map,
    of: {
      type: Map,
      of: monthSchema
    }
  }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports =  Expense;
