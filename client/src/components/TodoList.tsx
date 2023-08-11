import TodoItem from "./TodoItem";
import TodoListProps from "../types/TodoListProps";

const TodoList = (props: TodoListProps) => {
  const { todos, removeTodo, editTodo } = props;
  return (
    <div className="list-container rounded-md mb-6">
      {todos.map((todo) =>(
        <div key={todo.todo_id}>
          <TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
        )
      )}
    </div>
  );
};

export default TodoList;
