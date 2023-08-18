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
    <div>
      {filteredTodos.length ? (
        <div className="list-container rounded-md mb-6">
          {filteredTodos.map((todo) => (
            <div key={todo.todo_id}>
              <TodoItem
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                editTodoStatus={editTodoStatus}
              />
            </div>
          ))}
          <TodoListInfo
            setFilter={setFilter}
            filteredTodos={filteredTodos}
            todos={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
            editTodoStatus={editTodoStatus}
          />
        </div>
      ) : (
        <div>
          <p className="empty-list mb-7 p-24 text-xl">Your List is empty</p>
          <TodoListInfo
            setFilter={setFilter}
            filteredTodos={filteredTodos}
            todos={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
            editTodoStatus={editTodoStatus}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
