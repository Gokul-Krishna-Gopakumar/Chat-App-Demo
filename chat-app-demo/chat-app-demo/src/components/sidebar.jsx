import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SideBar = () => {
  return (
    <>
      <div className="flex flex-col items-center py-5 bg-gray-950 text-white  min-w-20 justify-between">
        <div>
          <AccountCircleIcon />
        </div>
        <button>
          <LogoutIcon />
        </button>
      </div>
    </>
  );
};

export default SideBar;
