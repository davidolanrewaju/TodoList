import { useState } from "react";
import Modal from "./Modal";
import CheckedCircle from "./CheckedCircle";
import CircleIcon from "./CircleIcon";
import EditIcon from "./EditIcon";
import TodoItemProps from "../types/TodoItemProps";

const TodoItem = (props: TodoItemProps) => {
  const { todo, removeTodo, editTodo } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [showChecked, setShowChecked] = useState(false);

  const displayModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleCheck = () => {
    setShowChecked(!showChecked);
  };

  return (
    <div className="todo-item text-sm md:text-lg py-5 md:py-6 pl-4 md:pl-7 hover">
      {showChecked ? <CheckedCircle onClick={toggleCheck} /> : <CircleIcon onClick={toggleCheck} />}
      <img className="check-icon w-2 h-2" src="../src/images/icon-check.svg" alt="icon-check" />
      <p className="todo-title py-1 md:py-2 pl-5 pt-2 md:pt-3 cursor-pointer">
        {todo.title}
      </p>
      <div className="icon-container mr-5 ml-2">
        <EditIcon onClick={displayModal} />
        <img
          className="remove w-3 h-3 lg:w-4 lg:h-4"
          src="../src/images/icon-cross.svg"
          alt="icon-cross.svg"
          onClick={() => removeTodo(todo.todo_id)}
        />
      </div>
      <Modal
        todo={todo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default TodoItem;
