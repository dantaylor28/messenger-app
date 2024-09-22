import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-200 p-10">
        <h1>Sign up for an account</h1>

        <form action="">
          <div className="mt-5">
            <label>
              <div>Username:</div>
            </label>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="mt-3">
            <label>
              <div>Email Address:</div>
            </label>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="mt-3">
            <label>
              <div>Password:</div>
            </label>
            <input type="text" placeholder="Enter Password" />
          </div>
          <div className="mt-3">
            <label>
              <div>Confirm Password:</div>
            </label>
            <input type="text" placeholder="Confirm Password" />
          </div>

          {/* Enter age component */}
          
          <div className="flex gap-4">
            <div className="form-control">
              <label className="flex gap-2">
                <span>Male</span>
                <input type="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className=" flex gap-2">
                <span>Female</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className="mt-3 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-red-500 underline">
              Sign in here
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

export default SignUp;
