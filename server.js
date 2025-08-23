import express from "express";
import mongoose from "mongoose";
import Expense from "./schema.js";
import cors from "cors";


const uri = "mongodb+srv://anyone:142007@expenses.l3ftldt.mongodb.net/expenses?retryWrites=true&w=majority";


const app = express();
app.use(cors()); 


async function run() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
}


app.use(express.json());

app.get("/api/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find(); // <-- fetch all documents from "expenses" collection
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

app.post("/api/expenses", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


run();
app.listen(5000, () => {
  console.log(`🚀 Server running on http://localhost:5000`);
});
