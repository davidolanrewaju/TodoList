import TodoResponse from "./TodoResponseProps";

type TodoListProps = {
    todos: TodoResponse[];
    removeTodo: (id: number) => void;
    editTodo: (id: number, todo:TodoResponse) => void;
    editTodoStatus: (id: number, todo:TodoResponse) => void;
  }; //TODO: Add props type

  export default TodoListProps;