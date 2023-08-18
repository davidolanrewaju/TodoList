import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoListProps from "../types/TodoListProps";
import TodoListInfo from "./TodoListInfo";

const TodoList = (props: TodoListProps) => {
  const { todos, removeTodo, editTodo, editTodoStatus } = props;

  const [filter, setFilter] = useState("all");

  const todosActive = todos.filter((todo) => todo.status === "active");
  const todosCompleted = todos.filter((todo) => todo.status === "completed");

  let filteredTodos = todos;
  if (filter === "active") {
    filteredTodos = todosActive;
  } else if (filter === "completed") {
    filteredTodos = todosCompleted;
  }

  return (
    <div className="list-container rounded-md mb-6">
      {filteredTodos.map((todo) =>(
        <div key={todo.todo_id}>
          <TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo} editTodoStatus={editTodoStatus} />
        </div>
        )
      )}
      <TodoListInfo setFilter={setFilter} filteredTodos={filteredTodos} todos={todos} removeTodo={removeTodo} editTodo={editTodo} editTodoStatus={editTodoStatus} />
    </div>
  );
};

export default TodoList;
