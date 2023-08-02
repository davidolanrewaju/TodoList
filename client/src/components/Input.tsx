const Input = () => {
  return (
    <div className="input-container my-10">
      <div className="input-field rounded-md pl-4 md:pl-7">
        <div className="circle"></div>
        <input
          type="text"
          className="input-text text-sm md:text-lg py-2.5 md:py-4 pl-5 pt-4 md:pt-5 bg-transparent outline-none border-collapse"
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  );
};

export default Input;
