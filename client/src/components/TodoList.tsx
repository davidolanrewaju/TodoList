import Modal from "./Modal";
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
    <div>
      {todos.map((todo) =>(
        <div className="list-container rounded-md mb-6" key={todo.todo_id}>
          <TodoItem todo={todo} removeTodo={removeTodo} />
          <Modal todo={todo} removeTodo={removeTodo} />
        </div>
        )
      )}
    </div>
  );
};

export default TodoList;
