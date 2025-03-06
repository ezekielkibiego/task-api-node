import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";

import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,  
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

// Apply authentication middleware to all task routes
router.get("/", authenticate, getTasks);
router.get("/:id", authenticate, getTaskById);
router.post("/", authenticate, createTask);
router.patch("/:id", authenticate, updateTask);  
router.delete("/:id", authenticate, deleteTask);

export default router;
