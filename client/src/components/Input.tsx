import React, { ChangeEvent, useState } from "react";
import CircleIcon from "./CircleIcon";

//API Data Type
type TodoResponse = {
  todo_id: number;
  title: string;
  status: string;
};
const Input = () => {
  const [inputData, setInputData] = useState({
    title: "",
  });

  //HTTP POST request
  const addTodo = async () => {
    try {
      const body = { title: inputData.title };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data: TodoResponse = await response.json();
      console.log(data);

      //Clear input field after submission
      setInputData({ title: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  //Adds input value to database on submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo();
    window.location.reload();
  };

  return (
    <div className="input-container my-5">
      <form
        className="input-field rounded-md pl-4 md:pl-7"
        onSubmit={handleSubmit}
      >
        <CircleIcon />
        <input
          required
          type="text"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          className="input-text text-sm md:text-lg py-2.5 md:py-3 pl-5 pt-4 md:pt-5 bg-transparent outline-none border-collapse"
          placeholder="Create a new todo..."
        />
        <button type="submit" className="enter-icon w-5 h-5 mr-4">
          <svg
            className="enter w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;
