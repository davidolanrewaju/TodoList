import { useState } from "react";
import Modal from "./Modal";
import CircleIcon from "./CircleIcon";
import EditIcon from "./EditIcon";

type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
};

type TodoItemProps = {
  todo: TodoResponse;
  removeTodo: (id: number) => void;
  editTodo: (id: number) => void;
}; //TODO: Add props type

const TodoItem = (props: TodoItemProps) => {
  const { todo, removeTodo, editTodo } = props;

  const [ modalVisible, setModalVisible ] = useState(false);

  const displayModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <div className="todo-item text-sm md:text-lg py-5 md:py-6 pl-4 md:pl-7">
      <CircleIcon />
      <p className="todo-title py-1 md:py-2 pl-5 pt-2 md:pt-3 ">{todo.title}</p>
      <div className="icon-container mr-4">
        <EditIcon onClick={displayModal} />
        <img
          className="remove w-3 h-3"
          src="../src/images/icon-cross.svg"
          alt="icon-cross.svg"
          onClick={() => removeTodo(todo.todo_id)}
        />
      </div>
      <Modal todo={todo} removeTodo={removeTodo} editTodo={editTodo} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
    
  );
};

export default TodoItem;
