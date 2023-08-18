import { useState } from "react";
import TodoListProps from "../types/TodoListProps";
const TodoListInfo = (props: TodoListProps) => {
  const { todos, setFilter, filteredTodos, removeTodo } = props;
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setActiveFilter(newFilter);
  };

  const handleCompletedTodos = () => {
    todos.map((todo) => {
      if (todo.status === "completed") {
        removeTodo(todo.todo_id);
      }
    })
    console.log(todos);
  }

  const activeTodosCount = filteredTodos.filter(
    (todo) => todo.status === "active"
  ).length;

  return (
    <div className="list-info p-4 text-base">
      <div className="list-amount">
        <p>
          {activeTodosCount <= 1
            ? `${activeTodosCount} item left`
            : `${activeTodosCount} items left`}
        </p>
      </div>

      <div className="list-options">
        <ul>
          <li
            className={`${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </li>
          <li
            className={`${activeFilter === "active" ? "active" : ""}`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </li>
          <li
            className={`${activeFilter === "completed" ? "active" : ""}`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </li>
        </ul>
      </div>

      <div className="clear-completed">
        <p onClick= {() => handleCompletedTodos()}>Clear Completed</p>
      </div>
    </div>
  );
};

export default TodoListInfo;
