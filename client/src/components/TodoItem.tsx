import CircleIcon from "./Circleicon";
import EditIcon from "./EditIcon";

type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
};

type TodoItemProps = {
  todo: TodoResponse;
  removeTodo: (id: number) => void;
}; //TODO: Add props type

const TodoItem = (props: TodoItemProps) => {
  const { todo, removeTodo } = props;
  return (
    <div>
      <div className="todo-item text-sm md:text-lg py-5 md:py-6 px-4 md:px-7">
        <CircleIcon />
        <p className="todo-title mx-5 pt-1.5">{todo.title}</p>
        <div className="icon-container">
          <EditIcon />
          <img
            className="remove w-3 h-3 mx:4"
            src="../src/images/icon-cross.svg"
            alt="icon-cross.svg"
            onClick={() => removeTodo(todo.todo_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
