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
      <div className="bg-gray-200 p-10">
        <h1>Login to your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label>
              <div>Username:</div>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label>
              <div>Password:</div>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-3 text-sm">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-red-500 underline">
              Sign up here
            </Link>
          </div>

          <div className="text-center mt-5">
            <button
              className="border border-black px-2"
              disabled={sendingData}
            >
              {sendingData ? <span>Loading..</span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
