import TodoResponse from "./TodoResponseProps";

type GetTodoProps = {
  getTodos: () => void;
  todos: TodoResponse[];
  handleChangeMode: () => void;
  darkMode: boolean;
  setDarkMode: (modalVisible: boolean) => void;
};

export default GetTodoProps;
