import TodoList from "./TodoList";
import TodoResponse from "../types/TodoResponseProps";
import GetTodoProps from "../types/GetTodoProps";

const Content = (props: GetTodoProps) => {
  const { todos, getTodos } = props;

  //HTTP DELETE request
  const removeTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        getTodos();
      }
    } catch (err) {
      console.error(err);
    }
  };

  //HTTP EDIT REQUEST
  const editTodo = async (id: number, todos: TodoResponse) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todos),
      });
      if (response.status === 200) {
        getTodos();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />;
};

export default Content;
