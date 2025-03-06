import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        description: { type: String, default: "" },
        completed: {type: Boolean, default: false}

    },
    { timestamps: true }

);

const Task = mongoose.model("Task", taskSchema);

export default Task