import {
  Lock,
  Mail,
  MessagesSquare,
  User,
  UserCheck,
  ShieldCheck,
  ArrowUpDown,
} from "lucide-react";
import React, { useState } from "react";
import useSignup from "../hooks/useSignup";
import GenderCheckbox from "../components/GenderCheckbox";
import {
  DisplayPasswordBtn,
  DisplayConfirmPasswordBtn,
} from "../components/PasswordBtn";
import { Link } from "react-router-dom";
import AuthPattern from "../components/AuthPattern";
import { GoogleLogin } from "@react-oauth/google";
import useLogin from "../hooks/useLogin";

const SignUp = () => {
  const { loginWithGoogle } = useLogin();
  const [userInputs, setUserInputs] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  const [displayPassword, setDisplayPassword] = useState(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false);

  const { sendingData, signupUser } = useSignup();
  const handleCheckboxChange = (gender) => {
    setUserInputs({ ...userInputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupUser(userInputs);
  };

  return (
    <div className="min-h-screen min-w-full grid lg:grid-cols-2">
      {/* Left side - pattern animation */}
      <AuthPattern
        heading="Join Our Community"
        text="Create your free account to connect, keep in touch and share life updates with your friends and family"
      />

      {/* Right side */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full text-center items-center justify-center mb-5">
          {/* Logo */}
          <div className="size-14 rounded-xl flex items-center justify-center bg-amber-400/30 dark:bg-white/10 mb-4 group hover:bg-amber-400/35">
            <MessagesSquare className="size-7 text-amber-800 group-hover:text-amber-900 dark:text-amber-500 dark:group-hover:text-amber-600" />
          </div>
          <h1 className="text-2xl capitalize font-medium text-black tracking-wider mb-1 dark:text-white">
            Create an account
          </h1>
          <p className="font-light text-black/60 dark:text-white/70">
            Fill in the form to create your free profile
          </p>
        </div>

        {/* Sign up form */}
        <div>
          <form onSubmit={handleSubmit} className="min-w-[400px]">
            {/* Full name input */}
            <div className="mb-3">
              <label htmlFor="full-name">
                <span className="text-xs font-medium dark:text-white">
                  Full Name
                </span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="text"
                  id="full-name"
                  placeholder="John Doe"
                  className="w-full bg-slate-50 dark:bg-white/10 dark:text-white border border-black/25 dark:border-white/20 rounded-[4px] h-10 pl-10 placeholder:text-black/40 dark:placeholder:text-white/50 peer focus:outline-none focus:border-black/40 dark:focus:border-white/40"
                  value={userInputs.fullName}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, fullName: e.target.value })
                  }
                />
                <User className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
              </div>
            </div>

            {/* Username Input */}
            <div className="mb-3">
              <label htmlFor="username">
                <span className="text-xs font-medium dark:text-white">
                  Username
                </span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="text"
                  id="username"
                  placeholder="JohnDoe123"
                  className="w-full bg-slate-50 dark:bg-white/10 dark:text-white border border-black/25 dark:border-white/20 rounded-[4px] h-10 pl-10 placeholder:text-black/40 dark:placeholder:text-white/50 peer focus:outline-none focus:border-black/40 dark:focus:border-white/40"
                  value={userInputs.username}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, username: e.target.value })
                  }
                />
                <UserCheck className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
              </div>
            </div>

            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="email">
                <span className="text-xs font-medium dark:text-white">
                  Email Address
                </span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@email.com"
                  className="w-full bg-slate-50 dark:bg-white/10 dark:text-white border border-black/25 dark:border-white/20 rounded-[4px] h-10 pl-10 placeholder:text-black/40 dark:placeholder:text-white/50 peer focus:outline-none focus:border-black/40 dark:focus:border-white/40"
                  value={userInputs.email}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, email: e.target.value })
                  }
                />
                <Mail className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
              </div>
            </div>

            {/* Password input */}
            <div className="mb-3">
              <label htmlFor="password">
                <span className="text-xs font-medium dark:text-white">
                  Password
                </span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={displayPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 dark:bg-white/10 dark:text-white border border-black/25 dark:border-white/20 rounded-[4px] h-10 pl-10 placeholder:text-black/40 dark:placeholder:text-white/50 peer focus:outline-none focus:border-black/40 dark:focus:border-white/40"
                  value={userInputs.password}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, password: e.target.value })
                  }
                />
                <Lock className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
                <DisplayPasswordBtn
                  displayPassword={displayPassword}
                  setDisplayPassword={setDisplayPassword}
                />
              </div>
            </div>

            {/* Confirm password input */}
            <div className="mb-3">
              <label htmlFor="confirm-password">
                <span className="text-xs font-medium dark:text-white">
                  Confirm Password
                </span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={displayConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 dark:bg-white/10 dark:text-white border border-black/25 dark:border-white/20 rounded-[4px] h-10 pl-10 placeholder:text-black/40 dark:placeholder:text-white/50 peer focus:outline-none focus:border-black/40 dark:focus:border-white/40"
                  value={userInputs.confirmPassword}
                  onChange={(e) =>
                    setUserInputs({
                      ...userInputs,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <ShieldCheck className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
                <DisplayConfirmPasswordBtn
                  displayConfirmPassword={displayConfirmPassword}
                  setDisplayConfirmPassword={setDisplayConfirmPassword}
                />
              </div>
            </div>

            {/* Gender Input */}
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={userInputs.gender}
            />

            {/* Age input */}
            <div className="mb-3">
              <label htmlFor="age">
                <span className="text-xs font-medium dark:text-white">Age</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="number"
                  min="10"
                  max="120"
                  id="age"
                  placeholder="25"
                  className="w-[20%] bg-slate-50 dark:bg-white/10 dark:text-white border border-black/25 dark:border-white/20 rounded-[4px] h-10 pl-10 placeholder:text-black/40 dark:placeholder:text-white/50 peer focus:outline-none focus:border-black/40 dark:focus:border-white/40"
                  value={userInputs.age}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, age: e.target.value })
                  }
                />
                <ArrowUpDown className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center mt-8">
              <button
                className="flex items-center justify-center w-full h-10 rounded-[4px] cursor-pointer font-medium tracking-wider bg-amber-500/60 dark:bg-amber-500 hover:bg-amber-500/75 dark:hover:bg-amber-600 transition"
                disabled={sendingData}
              >
                {sendingData ? (
                  <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-amber-900"></div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>

            <div className="flex items-center justify-center text-xs mt-3 gap-1">
              <p className="font-light text-black/70 dark:text-white/70">
                Already have an account?
              </p>
              <Link
                to={"/login"}
                className="cursor-pointer text-amber-600/80 dark:text-amber-500/80 hover:text-amber-600 dark:hover:text-amber-500 hover:underline transition"
              >
                Sign in here
              </Link>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4 w-full">
            <span className="border-t border-gray-300 w-1/4"></span>
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <span className="border-t border-gray-300 w-1/4"></span>
          </div>

          {/* Google Signup */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              loginWithGoogle(credentialResponse.credential);
            }}
            onError={() => toast.error("Google signup unsuccessful")}
            useOneTap={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
