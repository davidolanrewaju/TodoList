import TodoResponse from "./TodoResponseProps";

type TodoItemProps = {
  todo: TodoResponse;
  removeTodo: (id: number) => void;
  editTodo: (id: number, todo: TodoResponse) => void;
  editTodoStatus: (id: number, todo: TodoResponse) => void;
  darkMode: boolean;
}; //TODO: Add props type

export default TodoItemProps;
