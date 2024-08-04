import Navbar from "../../components/navbar";
import SideBar from "../../components/sidebar";

const MainChat = () => {
  return (
    //Need to work on responsive dimension changes
    <div>
      <Navbar />
      <body className="flex h-screen">
        <div className="flex bg-emerald-950 w-4/12">
          <SideBar />
          <div className="w-11/12 text-white">Users</div>
        </div>
        <div className="bg-emerald-800 w-8/12 text-white ">UserChat</div>
      </body>
    </div>
  );
};

export default MainChat;
