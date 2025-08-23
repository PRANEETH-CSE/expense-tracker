import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    amount: { type: Number, required: true }
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
