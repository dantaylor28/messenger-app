import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useAuthContext } from "../context/AuthContext";
import AuthPattern from "../components/AuthPattern";
import { Lock, MessagesSquare, User } from "lucide-react";
import { DisplayPasswordBtn } from "../components/PasswordBtn";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);

  const { sendingData, loginUser, loginWithGoogle } = useLogin();
  const { authenticatedUser } = useAuthContext();

  // Read logout flag from local storage
  const hasLoggedOut = localStorage.getItem("hasLoggedOut") === "true";

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
          <div className="size-14 rounded-xl flex items-center justify-center bg-amber-400/30 dark:bg-white/10 mb-4 group hover:bg-amber-400/35">
            <MessagesSquare className="size-7 text-amber-800 group-hover:text-amber-900 dark:text-amber-500 dark:group-hover:text-amber-600" />
          </div>
          <h1 className="text-2xl capitalize font-medium text-black tracking-wider mb-1 dark:text-white">
            Login To Your Account
          </h1>
          <p className="font-light text-black/60 dark:text-white/70">
            Fill in the form to sign in to your profile
          </p>
        </div>

        {/* Login form */}
        <div>
          <form onSubmit={handleSubmit} className="min-w-[400px]">
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <User className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus:text-black/70 dark:peer-focus:text-white/70" />
                <DisplayPasswordBtn
                  displayPassword={displayPassword}
                  setDisplayPassword={setDisplayPassword}
                />
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
                  "Sign In"
                )}
              </button>
            </div>

            <div className="flex items-center justify-center text-xs mt-3 gap-1">
              <p className="font-light text-black/70 dark:text-white/70">
                Don't have an account?
              </p>
              <Link
                to={"/signup"}
                className="cursor-pointer text-amber-600/80 dark:text-amber-500/80 hover:text-amber-600 dark:hover:text-amber-500 hover:underline transition"
              >
                Sign up here
              </Link>
            </div>

            <div className="relative my-4 text-center text-sm text-black/40 dark:text-white/50">
              <div className="absolute w-full border-t border-black/20 dark:border-white/20 top-1/2 left-0" />
              {/* <span className="bg-white dark:bg-black px-2 relative z-10">
                or
              </span> */}
            </div>
            {/* Google login */}
            {!authenticatedUser && (
              <div className="mt-10 flex justify-center">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    if (credentialResponse.credential) {
                      loginWithGoogle(credentialResponse.credential);
                    }
                  }}
                  onError={() => toast.error("Google sign-in failed")}
                  useOneTap={!hasLoggedOut} // Will only auto prompt if user has not previously logged out
                />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Right side - pattern animation */}
      <AuthPattern
        heading="Welcome Back"
        text="Sign in to stay connected, share memorable moments, and keep your friends and family updated effortlessly"
      />
    </div>
  );
};

export default Login;
