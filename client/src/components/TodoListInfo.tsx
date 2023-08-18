import { useState } from "react";
import TodoListProps from "../types/TodoListProps";
const TodoListInfo = (props: TodoListProps) => {
  const { setFilter, filteredTodos } = props;
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setActiveFilter(newFilter);
  };

  return (
    <div className="list-info p-4 text-base">
      <div className="list-amount">
        <p>{filteredTodos.length} items left</p>
      </div>

      <div className="list-options">
        <ul>
          <li className={`${activeFilter === "all" ? "active" : ""} all-flex`} onClick={() => handleFilterChange("all")}>All</li>
          <li className={`${activeFilter === "active" ? "active" : ""} active-flex`} onClick={() => handleFilterChange("active")}>Active</li>
          <li className={`${activeFilter === "completed" ? "active" : ""} complete-flex`}onClick={() => handleFilterChange("completed")}>Completed</li>
        </ul>
      </div>

      <div className="clear-completed">
        <p>Clear Completed</p>
      </div>
    </div>
  );
};

export default TodoListInfo;
