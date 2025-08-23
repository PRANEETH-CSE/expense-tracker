import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://anyone:142007@expenses.l3ftldt.mongodb.net/")
        .then(console.log("database"))


const app = express();
const PORT = process.env.PORT || 5000;



// API routes (example)
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express!" });
});



app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
