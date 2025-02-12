const Arrow = ({ isAtBottom, handleScroll }) => {
  return (
    !isAtBottom && (
      <button
        onClick={handleScroll}
        className="sticky bottom-0 ml-auto bg-zinc-300 rounded-lg p-1 hover:bg-zinc-400 transition cursor-pointer shadow-black/50 shadow-lg"
      >
        <img src={"./arrow.svg"} className="w-3" />
      </button>
    )
  );
};

export default Arrow;
