import Content from "./components/Content";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import LightBackground from "./components/LightBackground";
import DarkBackground from "./components/DarkBackground";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeMode = () => {
    setDarkMode(!darkMode);
  };
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
      <div className={`absolute ${darkMode ? "dark-bg-color" : "light-bg-color"}`}>
        {darkMode ? <DarkBackground/> : <LightBackground />}
        <div className="content-container h-screen relative w-auto mx-4 md:mx-8 lg:mx-24 xl:mx-60 -mt-36 md:-mt-48 lg:-mt-32 xl:-mt-48">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleChangeMode={handleChangeMode}
          getTodos={getTodos}
          todos={todos}
        />
        <Input
          getTodos={getTodos}
          todos={todos}
          handleChangeMode={handleChangeMode}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Content
          getTodos={getTodos}
          todos={todos}
          handleChangeMode={handleChangeMode}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        </div>
    </div>
  );
}

export default App;
