import { useState } from "react";
import TodoList from "./TodoList";
import TodoResponse from "../types/TodoResponseProps";
import GetTodoProps from "../types/GetTodoProps";

const Content = (props: GetTodoProps) => {
  const { todos, getTodos, darkMode } = props;
  const [filter, setFilter] = useState("all");

  const todosActive = todos.filter((todo) => todo.status === "active");
  const todosCompleted = todos.filter((todo) => todo.status === "completed");

  let filteredTodos = todos;
  if (filter === "active") {
    filteredTodos = todosActive;
  } else if (filter === "completed") {
    filteredTodos = todosCompleted;
  }

  //HTTP DELETE request
  const removeTodo = async (id: number) => {
    try {
      const response = await fetch(`https://todolist-ltzl.onrender.com/todos/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        getTodos();
      }
    } catch (err) {
      console.error(err);
    }
  };

  //HTTP EDIT REQUEST
  const editTodo = async (id: number, todos: TodoResponse) => {
    try {
      const response = await fetch(`https://todolist-ltzl.onrender.com/todos/${id}/edit/title`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todos),
      });
      if (response.status === 200) {
        getTodos();
      }
    } catch (err) {
      console.error(err);
    }
  };

  
  const editTodoStatus = async (id: number, todos: TodoResponse) => {
    try {
      const response = await fetch(`https://todolist-ltzl.onrender.com/todos/${id}/edit/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todos),
      });
      if (response.status === 200) {
        getTodos();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <TodoList filteredTodos={filteredTodos} setFilter={setFilter} darkMode={darkMode} todos={todos} removeTodo={removeTodo} editTodo={editTodo} editTodoStatus={editTodoStatus} />;
};

export default Content;
