import { useEffect, useState } from "react";

type TodoData = {
    todo_id: number;
    title: string;
    status: string;
  };
const TodoList = () => {
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTodos();
  },[]);

  const [todos, setTodos] = useState([]);

  return (
    <div className="list-container rounded-md px-4 py-4">
        {todos.map((todo:TodoData) => {
          return (
            <div className="todo-item" key={todo.todo_id}>
                <div className="circle"></div>
                <h3>{todo.title}</h3>
                <img className="w-5 h-5" src="../src/images/icon-cross.svg" alt="icon-cross.svg" />
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
