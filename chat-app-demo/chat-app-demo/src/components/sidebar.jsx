import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { AuthContext } from "../../../src/context/AuthContext";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  return (
    <>
      <div className="flex flex-col items-center py-5 bg-gray-950 text-white  min-w-20 justify-between">
        <div>
          <AccountCircleIcon />
        </div>

        <button onClick={() => logOutUser()}>
          <LogoutIcon />
          <Link to="/login" className="text-white">
            Log Out
          </Link>
        </button>
      </div>
    </>
  );
};

export default SideBar;
