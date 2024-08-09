import { useContext } from "react";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import UserChat from "../../components/userChat";
import UserList from "../../components/userList";
import { ChatContext } from "../../../../src/context/chatContext";
import { AuthContext } from "../../../../src/context/AuthContext";

const MainChat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return (
    //Need to work on responsive dimension changes
    <div>
      <Navbar />
      <body className="flex h-[calc(100vh-56px)]">
        <SideBar />
        <UserList />
        <UserChat />
      </body>
    </div>
  );
};

export default MainChat;
