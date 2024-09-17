import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-200 p-10">
        <h1>Login to your account</h1>

        <form action="">
          <div className="mt-5">
            <label>
              <div>Username:</div>
            </label>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="mt-3">
            <label>
              <div>Password:</div>
            </label>
            <input type="text" placeholder="Enter Password" />
          </div>

          <div className="mt-3 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-red-500 underline">
              Sign up here
            </a>
          </div>

          <div className="text-center mt-5">
            <button className="border border-black px-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
