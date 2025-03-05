import Task from "../models/Tasks.js";

// 🔹 Error Handler
const handleError = (res, error, status = 500) => {
  res.status(status).json({ message: error.message });
};

// 🔹 Get All Tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    handleError(res, err);
  }
};

// 🔹 Get Task by ID
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    handleError(res, err);
  }
};

// 🔹 Create a Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    handleError(res, err);
  }
};

// 🔹 Update Task
export const updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
  
      // Only allow updating specified fields
      const allowedUpdates = ["title", "description", "completed"];
      const updateKeys = Object.keys(updates);
      const isValidUpdate = updateKeys.every(key => allowedUpdates.includes(key));
  
      if (!isValidUpdate) {
        return res.status(400).json({ message: "Invalid update fields" });
      }
  
      const updatedTask = await Task.findByIdAndUpdate(id, updates, { 
        new: true, 
        runValidators: true 
      });
  
      if (!updatedTask) return res.status(404).json({ message: "Task not found" });
  
      res.json(updatedTask);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// 🔹 Delete Task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) return res.status(404).json({ message: "Task not found" });

    res.status(204).send();  // No content response
  } catch (err) {
    handleError(res, err);
  }
};
