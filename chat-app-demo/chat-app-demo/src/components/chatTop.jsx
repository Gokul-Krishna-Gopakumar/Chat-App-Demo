import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
const ChatTop = () => {
  return (
    <div className=" bg-slate-700 px-2 py-4">
      <div className="flex justify-between ">
        <div className="m-2 w-96 text-white">User Name</div>
        <div className="w-24">
          <button
            className="bg-yellow-500 p-2 border-gray-700 border-2 rounded-xl "
            type="submit"
            alt="voice call"
          >
            <CallIcon />
          </button>
          <button
            className="bg-yellow-500 p-2 border-gray-700 border-2 rounded-xl"
            type="submit"
            alt="video call"
          >
            <VideocamIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatTop;
