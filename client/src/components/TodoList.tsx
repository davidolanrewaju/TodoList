import { useEffect, useState } from "react";
import EditIcon from "./EditIcon";

type TodoData = {
  todo_id: number;
  title: string;
  status: string;
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //HTTP GET request
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="list-container rounded-md mb-6">
      {todos.map((todo: TodoData) => {
        return (
          <div
            className="todo-item text-sm md:text-lg py-5 md:py-6 px-4 md:px-7"
            key={todo.todo_id}
          >
            <div className="circle"></div>
            <p className="todo-title mx-5 pt-1.5">{todo.title}</p>
            <div className="icon-container">
              <EditIcon />
              <img
                className="remove w-3 h-3"
                src="../src/images/icon-cross.svg"
                alt="icon-cross.svg"
                onClick={() => removeTodo(todo.todo_id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
