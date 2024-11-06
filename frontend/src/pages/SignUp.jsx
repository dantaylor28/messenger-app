import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [userInputs, setUserInputs] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  const { sendingData, signupUser } = useSignup();
  const handleCheckboxChange = (gender) => {
    setUserInputs({ ...userInputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupUser(userInputs);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-[600px] bg-gray-100 py-16 px-24 border border-black/10 rounded-lg shadow-md">
        <h1 className="text-center text-2xl">
          Welcome to <span className="text-cyan-600">ChatApp</span>
        </h1>
        <h2 className="text-md mt-5 text-center opacity-70">
          Sign up for an account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            {/* <label>
              <div>Full Name:</div>
            </label> */}
            <input
              className="w-full h-9 rounded-sm text-md pl-1 shadow-sm"
              type="text"
              placeholder="Full Name"
              value={userInputs.fullName}
              onChange={(e) =>
                setUserInputs({ ...userInputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="mt-5">
            {/* <label>
              <div>Username:</div>
            </label> */}
            <input
              className="w-full h-9 rounded-sm text-md pl-1 shadow-sm"
              type="text"
              placeholder="Username"
              value={userInputs.username}
              onChange={(e) =>
                setUserInputs({ ...userInputs, username: e.target.value })
              }
            />
          </div>
          <div className="mt-5">
            {/* <label>
              <div>Email Address:</div>
            </label> */}
            <input
            className="w-full h-9 rounded-sm text-md pl-1 shadow-sm"
              type="email"
              placeholder="Email"
              value={userInputs.email}
              onChange={(e) =>
                setUserInputs({ ...userInputs, email: e.target.value })
              }
            />
          </div>
          <div className="mt-5">
            {/* <label>
              <div>Password:</div>
            </label> */}
            <input
            className="w-full h-9 rounded-sm text-md pl-1 shadow-sm"
              type="password"
              placeholder="Password"
              value={userInputs.password}
              onChange={(e) =>
                setUserInputs({ ...userInputs, password: e.target.value })
              }
            />
          </div>
          <div className="mt-5">
            {/* <label>
              <div>Confirm Password:</div>
            </label> */}
            <input
            className="w-full h-9 rounded-sm text-md pl-1 shadow-sm"
              type="password"
              placeholder="Confirm Password"
              value={userInputs.confirmPassword}
              onChange={(e) =>
                setUserInputs({
                  ...userInputs,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <div className="flex mt-5">
            <div>
              {/* <label>
                <div>Enter Age:</div>
              </label> */}
              <input
              className="w-full h-9 rounded-sm text-md pl-1 shadow-sm"
              placeholder="Age"
                type="number"
                min="10"
                max="120"
                value={userInputs.age}
                onChange={(e) =>
                  setUserInputs({ ...userInputs, age: e.target.value })
                }
              />
            </div>
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={userInputs.gender}
          />

          <div className="text-center mt-5">
            <button className="w-full h-10 rounded-sm bg-cyan-600 text-white border border-black/10 hover:bg-cyan-700 cursor-pointer" disabled={sendingData}>
              {sendingData ? <span>Loading..</span> : "Create Account"}
            </button>
          </div>
          
          <div className="mt-3 text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-red-500 underline">
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
