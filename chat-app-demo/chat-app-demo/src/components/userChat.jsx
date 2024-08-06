import ChatArea from "./chatArea";
import ChatTop from "./chatTop";
import TextArea from "./textArea";

const UserChat = () => {
  return (
    <div className="flex flex-col grow bg-emerald-900 min-w-96 justify-between  ">
      <ChatTop />
      <ChatArea />
      <TextArea />
    </div>
  );
};

export default UserChat;
