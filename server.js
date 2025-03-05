import express from "express";
import mongoose  from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// routes

app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => res.send("Task API is running"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });