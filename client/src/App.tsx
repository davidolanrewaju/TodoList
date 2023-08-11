import Content from "./components/Content";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
    //HTTP GET request
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/todos");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header />
      <Input getTodos={getTodos} todos={todos} />
      <Content getTodos={getTodos} todos={todos}/>
    </div>
  );
}

export default App;
