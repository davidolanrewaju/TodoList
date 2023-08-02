const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-text text-3xl md:text-4xl font-bold uppercase text-white">
        Todo
      </h1>
      <img
        className="w-6 h-6 md:w-8 md:h-8"
        src="../src/images/icon-moon.svg"
        alt=""
      />
    </div>
  );
};

export default Header;
