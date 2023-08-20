import TodoItem from "./TodoItem";
import TodoListProps from "../types/TodoListProps";
import TodoListInfo from "./TodoListInfo";

const TodoList = (props: TodoListProps) => {
  const { filteredTodos, setFilter, todos, removeTodo, editTodo, editTodoStatus, darkMode } = props;

  return (
    <div>
      {filteredTodos.length ? (
        <div className={`${darkMode ? "list-container-dark" : "list-container-light"} rounded-md mb-6`}>
          {filteredTodos.map((todo) => (
            <div key={todo.todo_id}>
              <TodoItem
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                editTodoStatus={editTodoStatus}
                darkMode={darkMode}
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
            darkMode={darkMode}
          />
        </div>
      ) : (
        <div>
          <p className={`empty-list mb-7 p-24 text-xl ${darkMode ? "empty-list-dark" : "empty-list-light"}`}>Your List is empty</p>
          <TodoListInfo
            setFilter={setFilter}
            filteredTodos={filteredTodos}
            todos={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
            editTodoStatus={editTodoStatus}
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
