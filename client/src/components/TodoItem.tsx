import { useState } from "react";
import Modal from "./Modal";
import CheckedCircle from "./CheckedCircle";
import CircleIcon from "./CircleIcon";
import EditIcon from "./EditIcon";
import TodoItemProps from "../types/TodoItemProps";

const TodoItem = (props: TodoItemProps) => {
  const { todo, removeTodo, editTodo, editTodoStatus, darkMode } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [showChecked, setShowChecked] = useState(todo.status === "completed");

  const displayModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleCheck = () => {
    const updatedStatus = showChecked ? "active" : "completed";
    editTodoStatus(todo.todo_id, { ...todo, status: updatedStatus });
    setShowChecked(!showChecked);
  };

  return (
    <div className={`todo-item text-sm md:text-lg py-5 md:py-6 pl-4 md:pl-7 hover ${darkMode ? "todo-item-dark" : "todo-item-light"}`}>
      {showChecked ? (
        <div className="w-auto mt-3">
        <CheckedCircle onClick={toggleCheck} />
        <img
          className="check-icon w-3.5 h-3.5 relative"
          src="images/icon-check.svg"
          alt="icon-check"
        />
      </div>
      ) : (
        <CircleIcon darkMode={darkMode} onClick={toggleCheck} />
      )}
      <p className={`todo-title py-1 md:py-2 pl-5 pt-2 md:pt-3 cursor-pointer ${
          todo.status === "completed" ? "completed" : ""
        } ${darkMode ? "todo-title-dark" : "todo-title-light"}`}>
        {todo.title}
      </p>
      <div className="icon-container mr-5 ml-2 w-16">
        <EditIcon onClick={displayModal} />
        <img
          className="remove w-3 h-3 lg:w-4 lg:h-4"
          src="images/icon-cross.svg"
          alt="icon-cross.svg"
          onClick={() => removeTodo(todo.todo_id)}
        />
      </div>
      <Modal
        todo={todo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        editTodoStatus={editTodoStatus}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        darkMode={darkMode}
      />
    </div>
  );
};

export default TodoItem;
