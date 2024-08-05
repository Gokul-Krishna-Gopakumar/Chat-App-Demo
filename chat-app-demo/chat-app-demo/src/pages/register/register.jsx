import { useContext } from "react";
import Navbar from "../../components/navbar";
import { AuthContext } from "../../../../src/context/AuthContext";
import { Alert } from "react-alert";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <div onSubmit={registerUser}>
      <Navbar />

      <div className=" bg-emerald-950 flex flex-col">
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className=" font-bold my-8 text-yellow-200 text-2xl mx-auto">
            Register
          </h1>

          <div className=" text-white flex flex-col my-2 w-80">
            Name
            <input
              className="text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
              type="text"
              required
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, name: e.target.value })
              }
            />
            Email address
            <input
              className=" text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
              type="email"
              required
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            />
            Password
            <input
              className="text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
              type="text"
              required
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  password: e.target.value,
                })
              }
            />
          </div>

          <div className="my-2">
            <button className=" transition duration-300 ease-in-out bg-yellow-200 rounded-lg px-2 py-1  hover:bg-yellow-500 hover:text-white font-bold w-32">
              Sign Up
            </button>
          </div>
          <div className="my-4">
            <p className="text-white text-center text-sm ">
              Already a registered user?
              <a
                href="login"
                className="transition duration-300 ease-in-out text-yellow-200 mx-1 hover:text-yellow-500"
              >
                Sign in
              </a>
              here
            </p>
          </div>
          <div className="bg-white rounded-xl">
            {registerError?.error && alert(registerError?.message)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
