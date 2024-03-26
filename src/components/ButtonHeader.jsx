const ButtonHeader = ({ title, handleButton }) => {
  return (
    <button
      onClick={handleButton}
      className="mb-3  w-[100px]  bg-blue-500 text-white font-bold py-1 px-3 border border-blue-500 rounded hover:bg-black hover:text-blue-500 "
    >
      {title}
    </button>
  );
};

export default ButtonHeader;
