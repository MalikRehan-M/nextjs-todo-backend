const express = require("express");
const router = express.Router();

const todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a project", completed: true },
  { id: 3, text: "Read a book", completed: false },
  { id: 4, text: "Go for a run", completed: false },
  { id: 5, text: "Complete assignments", completed: true },
  { id: 6, text: "Write code", completed: false },
  { id: 7, text: "Learn new skills", completed: false },
  { id: 8, text: "Create a website", completed: true },
  { id: 9, text: "Explore the city", completed: false },
  { id: 10, text: "Study for exams", completed: false },
  { id: 11, text: "Exercise daily", completed: false },
  { id: 12, text: "Cook a new recipe", completed: false },
  { id: 13, text: "Plan a vacation", completed: false },
  { id: 14, text: "Read the news", completed: false },
  { id: 15, text: "Attend a workshop", completed: false },
  { id: 16, text: "Solve puzzles", completed: false },
  { id: 17, text: "Practice meditation", completed: false },
  { id: 18, text: "Watch a documentary", completed: false },
  { id: 19, text: "Go for a hike", completed: false },
  { id: 20, text: "Write a journal", completed: false },
];
const pageSize = 10;

router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const slicedTodos = todos.slice(start, end);

  if (slicedTodos.length > 0) {
    res.json(slicedTodos);
  } else {
    res.json([]);
  }
});

router.post("/", (req, res) => {
  const { text, completed } = req.body;
  const newTodo = { id: todos.length + 1, text, completed };
  todos.push(newTodo);
  res.json(newTodo);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedText = req.body.text;
  const updatedCompleted = req.body.completed;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (updatedText !== undefined) {
    todo.text = updatedText;
  }

  if (updatedCompleted !== undefined) {
    todo.completed = updatedCompleted;
  }

  res.json(todo);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
