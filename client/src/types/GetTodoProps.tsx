import TodoResponse from "./TodoResponseProps";

type GetTodoProps = {
  getTodos: () => void;
  todos: TodoResponse[];
};

export default GetTodoProps;
