import GetTodoProps from "../types/GetTodoProps";

const Header = (props: GetTodoProps) => {
  const { handleChangeMode, darkMode } = props;
  return (
    <div className="header-container">
      <h1 className="header-text text-3xl md:text-4xl font-bold uppercase text-white">
        Todo
      </h1>

      {darkMode ? (
        <img
          className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
          src="../src/images/icon-sun.svg"
          alt="light-mode"
          onClick={handleChangeMode}
        />
      ) : (
        <img
          className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
          src="../src/images/icon-moon.svg"
          alt="dark-mode"
          onClick={handleChangeMode}
        />
      )}
    </div>
  );
};

export default Header;
