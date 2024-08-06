import SendIcon from "@mui/icons-material/Send";
const TextArea = () => {
  return (
    <div className=" flex bg-slate-700 px-2 py-4 ">
      <input
        className="bg-slate-300  p-2 border-gray-700 border-2 rounded-xl w-full"
        type="text"
        placeholder="Enter message..."
      />
      <button
        className="bg-yellow-500 p-1 border-gray-700 border-2 rounded-xl w-24"
        type="submit"
        alt="send button"
      >
        <SendIcon />
      </button>
    </div>
  );
};

export default TextArea;
