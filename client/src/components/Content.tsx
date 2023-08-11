import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoResponse from "../types/TodoResponseProps";

const Content = () => {
  const [todos, setTodos] = useState([]);

  //HTTP GET request
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  //HTTP DELETE request
  const removeTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      getTodos();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  //HTTP EDIT REQUEST
  const editTodo = async (id:number, todos:TodoResponse) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todos),
      });
      const data = await response.json();
      getTodos();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />;
};

export default Content;
