import Navbar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import UserChat from "../../components/userChat";
import UserList from "../../components/userList";

const MainChat = () => {
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
