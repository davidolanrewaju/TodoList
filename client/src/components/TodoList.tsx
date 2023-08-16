import TodoItem from "./TodoItem";
import TodoListProps from "../types/TodoListProps";

const TodoList = (props: TodoListProps) => {
  const { todos, removeTodo, editTodo, editTodoStatus } = props;
  return (
    <div className="list-container rounded-md mb-6">
      {todos.map((todo) =>(
        <div key={todo.todo_id}>
          <TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo} editTodoStatus={editTodoStatus} />
        </div>
        )
      )}
    </div>
  );
};

export default TodoList;
