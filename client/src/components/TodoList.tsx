import TodoItem from "./TodoItem";

type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
}; //TODO: Add API response type

type TodoListProps = {
  todos: TodoResponse[];
  removeTodo: (id: number) => void;
}; //TODO: Add props type

const TodoList = (props: TodoListProps) => {
  const { todos, removeTodo } = props;
  return (
    <div className="list-container rounded-md mb-6">
      {todos.map((todo) =>(
          <TodoItem key={todo.todo_id} todo={todo} removeTodo={removeTodo} />
        )
      )}
    </div>
  );
};

export default TodoList;
