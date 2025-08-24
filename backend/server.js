const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Expense = require("./schema.js");
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
    const expenses = await Expense.find(); 
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

app.put("/api/delete", async (req, res) => {
   
    const { year, month, date, category } = req.body;

    const result = await Expense.updateOne(
      { _id: '68a9efa2f226a2c444649a4b' },
      {
        $pull: {
          [`data.${year}.${month}.transactions`]: {
            description: String(category),
            date: String(date),
          }
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.json("Deleted successfully")
    } else {
      console.log(result);
      res.json("no matching data found..");
    }
  });
app.put("/api/add", async (req, res) => {
   
    const { year, month, date, category,amount } = req.body;
    console.log(req.body);
    const result = await Expense.updateOne(
      { _id: '68a9efa2f226a2c444649a4b' },
      {
        $push: {
          [`data.${year}.${month}.transactions`]: {
            description: String(category),
            date: String(date),
            amount: Number(amount)
          }
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.json("Added successfully")
    } else {
      console.log(result);
      res.json("error.Try again");
    }
  });
    


run();
app.listen(5000, () => {
  console.log(`🚀 Server running on http://localhost:5000`);
});
