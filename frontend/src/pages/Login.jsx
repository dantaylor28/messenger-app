import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { sendingData, loginUser } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-[600px] bg-gray-100 py-16 px-24 border border-black/10 rounded-lg shadow-md">
        <h1 className="text-center text-2xl">
          Welcome to <span className="text-cyan-600">ChatApp</span>
        </h1>
        <h2 className="text-md mt-5 text-center opacity-70">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label htmlFor="username">
              <input
                className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-pointer"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-5">
            <label htmlFor="password">
              <input
                className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-pointer"
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="text-center mt-8">
            <button
              className="w-full h-10 rounded-sm bg-cyan-600 text-white border border-black/10 hover:bg-cyan-700 cursor-pointer"
              disabled={sendingData}
            >
              {sendingData ? <span>Loading..</span> : "Login"}
            </button>
          </div>

          <div className="mt-3 text-xs text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-orange-600 hover:underline cursor-pointer">
              Sign up here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
