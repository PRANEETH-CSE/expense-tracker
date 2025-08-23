import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;



// API routes (example)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});



app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
