import { useState } from "react";

type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
};

type TodoItemProps = {
  todo: TodoResponse;
  removeTodo: (id: number) => void;
  editTodo: (id: number) => void;
};

type ModalComponentProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};
const Modal = (props: TodoItemProps & ModalComponentProps) => {
  const { todo, modalVisible, setModalVisible } = props;

  const [modalInput, setModalInput] = useState({
    title: todo.title,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setModalInput({ ...modalInput, [name]: value });
    console.log(modalInput);
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalVisible(false);
  };

  return (
    <div className={`modal-container ${modalVisible ? 'visible' : 'hidden'}`}>
      <form className="modal-form">
        <input
          className="modal-input"
          type="text"
          name="title"
          onChange={handleChange}
          value={modalInput.title}
        />
        <div className="button-container">
          <button className="cancel-button button" onClick={handleCancel}>Cancel</button>
          <button className="save-button button" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
