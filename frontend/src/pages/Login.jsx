import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import AuthPattern from "../components/AuthPattern";
import { Lock, MessagesSquare, User } from "lucide-react";
import { DisplayPasswordBtn } from "../components/PasswordBtn";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);

  const { sendingData, loginUser } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(username, password);
  };
  return (
    <div className="min-h-screen min-w-full grid lg:grid-cols-2">
      {/*  Left side */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full text-center items-center justify-center mb-5">
          {/* Logo */}
          <div className="size-14 rounded-xl flex items-center justify-center bg-amber-400/30 mb-4 group hover:bg-amber-400/35">
            <MessagesSquare className="size-7 text-amber-800 group-hover:text-amber-900" />
          </div>
          <h1 className="text-2xl capitalize font-medium text-black tracking-wider mb-1">
            Login To Your Account
          </h1>
          <p className="font-light text-black/60">
            Fill in the form to sign in to your profile
          </p>
        </div>

        {/* Login form */}
        <div>
          <form onSubmit={handleSubmit} className="min-w-[400px]">
            {/* Username Input */}
            <div className="mb-3">
              <label htmlFor="username">
                <span className="text-xs font-medium">Username</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="text"
                  id="username"
                  placeholder="JohnDoe123"
                  className="w-full bg-slate-50 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <User className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
              </div>
            </div>

            {/* Password input */}
            <div className="mb-3">
              <label htmlFor="password">
                <span className="text-xs font-medium">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={displayPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
                <DisplayPasswordBtn
                  displayPassword={displayPassword}
                  setDisplayPassword={setDisplayPassword}
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center mt-8">
              <button
                className="flex items-center justify-center w-full h-10 rounded-[4px] cursor-pointer font-medium tracking-wider bg-amber-500/60 hover:bg-amber-500/75 transition"
                disabled={sendingData}
              >
                {sendingData ? (
                  <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-amber-900"></div>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            <div className="flex items-center justify-center text-xs mt-3 gap-1">
              <p className="font-light text-black/70">
                Don't have an account?
              </p>
              <Link
                to={"/signup"}
                className="cursor-pointer text-amber-600/80 hover:text-amber-600 hover:underline transition"
              >
                Sign up here
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - pattern animation */}
      <AuthPattern
        heading="Welcome Back"
        text="Sign in to stay connected, share memorable moments, and keep your friends and family updated effortlessly"
      />
    </div>

    // <div className="flex flex-row gap-12 lg:gap-16 items-center justify-center lg:px-5">
    //   <div className="sm:min-w-[500px] md:min-w-[650px] lg:min-w-[500px] xl:min-w-[650px] bg-gray-100 py-16 sm:px-24 border border-black/10 rounded-lg shadow-md m-5 px-12">
    //     <h1 className="text-center text-2xl">
    //       Welcome to <span className="text-cyan-600">ChatApp</span>
    //     </h1>
    //     <h2 className="text-md mt-5 text-center opacity-70">
    //       Login to your account
    //     </h2>

    //     <form onSubmit={handleSubmit}>
    //       <div className="mt-5 min-w-[281.98px]">
    //         <label htmlFor="username">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             type="text"
    //             placeholder="Enter Username"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </label>
    //       </div>
    //       <div className="mt-5">
    //         <label htmlFor="password">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             type="password"
    //             placeholder="Enter Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </label>
    //       </div>

    //       <div className="text-center mt-8">
    //         <button
    //           className="w-full h-10 rounded-sm bg-cyan-600 text-white border border-black/10 hover:bg-cyan-700 cursor-pointer flex items-center justify-center"
    //           disabled={sendingData}
    //         >
    //           {sendingData ? <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white"></div> : "Login"}
    //         </button>
    //       </div>

    //       <div className="mt-3 text-xs text-center">
    //         Don't have an account?{" "}
    //         <Link
    //           to={"/signup"}
    //           className="text-orange-600 hover:underline cursor-pointer"
    //         >
    //           Sign up here
    //         </Link>
    //       </div>
    //     </form>
    //   </div>

    //   <div className="hidden lg:flex">
    //     <img
    //       className="object-cover rounded-full border-4 border-cyan-800/30"
    //       src={loginImg}
    //       height={650}
    //       width={650}
    //       alt="man using mobile phone"
    //     />
    //   </div>
    // </div>
  );
};

export default Login;
