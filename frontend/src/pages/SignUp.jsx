import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userInputs, setUserInputs] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-200 p-10">
        <h1>Sign up for an account</h1>

        <form action="">
          <div className="mt-5">
            <label>
              <div>Full Name:</div>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              required
              value={userInputs.fullName}
              onChange={(e) =>
                setUserInputs({ ...userInputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="mt-5">
            <label>
              <div>Username:</div>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              required
              value={userInputs.username}
              onChange={(e) =>
                setUserInputs({ ...userInputs, username: e.target.value })
              }
            />
          </div>
          <div className="mt-3">
            <label>
              <div>Email Address:</div>
            </label>
            <input type="email" placeholder="Enter Email" required
            value={userInputs.email}
            onChange={(e) =>
              setUserInputs({ ...userInputs, email: e.target.value })
            } />
          </div>
          <div className="mt-3">
            <label>
              <div>Password:</div>
            </label>
            <input type="password" placeholder="Enter Password" required
            value={userInputs.password}
            onChange={(e) =>
              setUserInputs({ ...userInputs, password: e.target.value })
            } />
          </div>
          <div className="mt-3">
            <label>
              <div>Confirm Password:</div>
            </label>
            <input type="password" placeholder="Confirm Password" required
            value={userInputs.confirmPassword}
            onChange={(e) =>
              setUserInputs({ ...userInputs, confirmPassword: e.target.value })
            } />
          </div>

          <div className="flex mt-3">
            <div>
              <label>
                <div>Enter Age:</div>
              </label>
              <input type="number" min="10" max="120" required 
              value={userInputs.age}
              onChange={(e) =>
                setUserInputs({ ...userInputs, age: e.target.value })
              }/>
            </div>
          </div>

          <div className="flex gap-4 mt-3">
            <div className="form-control">
              <label className="flex gap-1">
                <span>Male</span>
                <input type="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className=" flex gap-1">
                <span>Female</span>
                <input type="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="flex gap-1">
                <span>Prefer not to say</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className="mt-3 text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-red-500 underline">
              Sign in here
            </Link>
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
