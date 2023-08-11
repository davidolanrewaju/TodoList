import TodoItem from "./TodoItem";

type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
}; //TODO: Add API response type

type TodoListProps = {
  todos: TodoResponse[];
  removeTodo: (id: number) => void;
  editTodo: (id: number) => void;
}; //TODO: Add props type

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
