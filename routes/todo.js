import express from "express";
import mongoose from "mongoose";
import todoSchema from "../schemas/todoSchema.js";

const Todo = mongoose.model("Todo", todoSchema);

const router = express.Router();

// get all todo
router.get("/", async (req, res) => {});

// get a todo
router.get("/:id", async (req, res) => {});

// create a todo
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);

  newTodo.save(err => {
    if (err) {
      res.status(500).json({
        error: "Something went wrong in the server!"
      });
    } else {
      res.status(200).json({
        message: "Inserted successfully!"
      });
    }
  });
});

export default router;
