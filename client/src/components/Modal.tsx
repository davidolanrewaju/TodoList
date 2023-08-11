import { useState } from "react";
import TodoItemProps from "../types/TodoItemProps";
import ModalComponentProps from "../types/ModalComponentProps";

const Modal = (props: TodoItemProps & ModalComponentProps) => {
  const { todo, modalVisible, setModalVisible, editTodo } = props;

  const [modalInput, setModalInput] = useState({title: todo.title});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setModalInput({ ...modalInput, [name]: value });
    console.log(modalInput);
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalVisible(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editTodo(todo.todo_id, {...todo, title: modalInput.title});
    setModalVisible(false);
  };

  return (
    <div className={`modal-container ${modalVisible ? "block" : "hidden"}`}>
      {" "}
      {/* Block and hidden are tailwind css classnames */}
      <form className="modal-form" onSubmit={handleSubmit}>
        <input
          className="modal-input"
          type="text"
          name="title"
          onChange={handleChange}
          value={modalInput.title}
        />
        <div className="button-container">
          <button className="cancel-button button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-button button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
