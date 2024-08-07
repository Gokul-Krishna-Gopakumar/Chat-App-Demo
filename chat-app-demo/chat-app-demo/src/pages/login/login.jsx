import { useContext } from "react";
import Navbar from "../../components/navbar";
import { AuthContext } from "../../../../src/context/AuthContext";

const Login = () => {
  const { logInUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div className=" bg-emerald-950 flex flex-col">
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className=" font-bold my-8 text-yellow-200 text-2xl mx-auto">
            Login
          </h1>
          <div className=" text-white flex flex-col my-2 w-80">
            Email address
            <input
              className=" text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
              type="email"
              required
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, email: e.target.value })
              }
            />
            Password
            <input
              className="text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
              type="text"
              required
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </div>

          <div className="my-2" onSubmit={logInUser}>
            <button className=" transition duration-300 ease-in-out bg-yellow-200 rounded-lg px-2 py-1  hover:bg-yellow-500 hover:text-white font-bold w-32">
              Sign In
            </button>
          </div>
          <div className="my-4">
            <p className="text-white text-center text-sm ">
              Not registered yet?
              <a
                href="register"
                className="transition duration-300 ease-in-out text-yellow-200 mx-1 hover:text-yellow-500"
              >
                Sign up
              </a>
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
