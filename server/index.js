const express = require("express");
const cors = require("cors");
const pool = require("./db.js");

const app = express();

// MIDDLEWARE //
app.use(cors());
app.use(express.json()); //helps to grant access the req.body property of the API

// ROUTES //

//Create Todo
app.post("/todos", async (req, res) => {
    try {
        const status = "active";
        const { title } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todos (title, status) VALUES ($1, $2) RETURNING *",
            [title, status]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Get todos for display
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//Get todo to update or perform CRUD operation on
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Edit or Update todo
app.put("/todos/:id/edit/title", async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        await pool.query("UPDATE todos SET title = $1 WHERE todo_id = $2",
            [title, id]
        );
        res.json("Task edited successfully");
    } catch (err) {
        console.error(err.message);
    }
})

// Update todo status
app.put("/todos/:id/edit/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      await pool.query(
        "UPDATE todos SET status = $1 WHERE todo_id = $2",
        [status, id]
      );
  
      res.json("Todo status updated successfully");
    } catch (err) {
      console.error(err.message);
      res.status(500).json("An error occurred");
    }
  });  

//Delete todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
        res.json("Task deleted successfully");
    } catch (err) {
        console.error(err.message);
    }
})
   