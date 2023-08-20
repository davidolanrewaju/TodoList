import TodoResponse from "./TodoResponseProps";

type TodoListProps = {
    todos: TodoResponse[];
    filteredTodos: TodoResponse[];
    removeTodo: (id: number) => void;
    editTodo: (id: number, todo:TodoResponse) => void;
    editTodoStatus: (id: number, todo:TodoResponse) => void;
    setFilter: (filter: string) => void;
    darkMode: boolean;
  }; //TODO: Add props type

  export default TodoListProps;