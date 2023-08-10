import { useState } from "react";

type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
};

type TodoItemProps = {
  todo: TodoResponse;
  removeTodo: (id: number) => void;
};
const Modal = (props: TodoItemProps) => {
  const { todo } = props;

  const [modalInput, setModalInput] = useState({
    title: todo.title,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setModalInput({ ...modalInput, [name]: value });
    console.log(modalInput);
  };
  return (
    <div className="modal-container">
      <form className="modal-form">
        <input
          className="modal-input"
          type="text"
          name="title"
          onChange={handleChange}
          value={modalInput.title}
        />
        <div className="button-container">
          <button className="cancel-button button">Cancel</button>
          <button className="save-button button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
