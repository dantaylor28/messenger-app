import {
  Lock,
  Mail,
  MessagesSquare,
  User,
  UserCheck,
  ShieldCheck,
  ChartColumn,
  ArrowUpDown,
} from "lucide-react";
import React, { useState } from "react";
import useSignup from "../hooks/useSignup";
import GenderCheckbox from "../components/GenderCheckbox";

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
    // <div className="flex flex-row gap-12 lg:gap-16 items-center justify-center lg:px-5">
    //   <div className="hidden lg:flex">
    //     <img
    //       className="object-cover rounded-full border-4 border-cyan-800/20"
    //       src={signupImg}
    //       height={650}
    //       width={650}
    //       alt="woman on bed using laptop"
    //     />
    //   </div>

    //   <div className="sm:min-w-[500px] md:min-w-[650px] lg:min-w-[500px] xl:min-w-[650px] bg-gray-100 py-16 sm:px-24 border border-black/10 rounded-lg shadow-md px-12 m-5">
    //     <h1 className="text-center text-2xl">
    //       Welcome to <span className="text-cyan-600">ChatApp</span>
    //     </h1>
    //     <h2 className="text-md mt-5 text-center opacity-70">
    //       Sign up for an account
    //     </h2>

    //     <form onSubmit={handleSubmit}>
    //       <div className="mt-5">
    //         <label htmlFor="full-name">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             id="full-name"
    //             type="text"
    //             placeholder="Full Name"
    // value={userInputs.fullName}
    // onChange={(e) =>
    //   setUserInputs({ ...userInputs, fullName: e.target.value })
    // }
    //           />
    //         </label>
    //       </div>
    //       <div className="mt-5">
    //         <label htmlFor="username">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             id="username"
    //             type="text"
    //             placeholder="Username"
    //             value={userInputs.username}
    //             onChange={(e) =>
    //               setUserInputs({ ...userInputs, username: e.target.value })
    //             }
    //           />
    //         </label>
    //       </div>
    //       <div className="mt-5">
    //         <label htmlFor="email">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             id="email"
    //             type="email"
    //             placeholder="Email"
    //             value={userInputs.email}
    //             onChange={(e) =>
    //               setUserInputs({ ...userInputs, email: e.target.value })
    //             }
    //           />
    //         </label>
    //       </div>
    //       <div className="mt-5">
    //         <label htmlFor="password">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             id="password"
    //             type="password"
    //             placeholder="Password"
    //             value={userInputs.password}
    //             onChange={(e) =>
    //               setUserInputs({ ...userInputs, password: e.target.value })
    //             }
    //           />
    //         </label>
    //       </div>
    //       <div className="mt-5">
    //         <label htmlFor="confirm-password">
    //           <input
    //             className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //             id="confirm-password"
    //             type="password"
    //             placeholder="Confirm Password"
    //             value={userInputs.confirmPassword}
    //             onChange={(e) =>
    //               setUserInputs({
    //                 ...userInputs,
    //                 confirmPassword: e.target.value,
    //               })
    //             }
    //           />
    //         </label>
    //       </div>

    //       <div className="flex mt-5">
    //         <div>
    //           <label htmlFor="age">
    //             <input
    //               className="w-full h-9 rounded-sm text-md pl-1 shadow-sm cursor-text"
    //               id="age"
    //               placeholder="Age"
    //               type="number"
    //               min="10"
    //               max="120"
    //               value={userInputs.age}
    //               onChange={(e) =>
    //                 setUserInputs({ ...userInputs, age: e.target.value })
    //               }
    //             />
    //           </label>
    //         </div>
    //       </div>

    // <GenderCheckbox
    //   onCheckboxChange={handleCheckboxChange}
    //   selectedGender={userInputs.gender}
    // />

    //       <div className="text-center mt-8">
    //         <button
    //           className="flex items-center justify-center w-full h-10 rounded-sm bg-cyan-600 text-white border border-black/10 hover:bg-cyan-700 cursor-pointer"
    //           disabled={sendingData}
    //         >
    //           {sendingData ? (
    //             <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white"></div>
    //           ) : (
    //             "Create Account"
    //           )}
    //         </button>
    //       </div>

    //       <div className="mt-3 text-xs text-center">
    //         Already have an account?{" "}
    //         <Link
    //           to={"/login"}
    //           className="text-orange-600 hover:underline cursor-pointer"
    //         >
    //           Sign in here
    //         </Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="min-h-screen grid lg:grid-cols-2">
      <div>
        {/* Left side - pattern animation */}
        Cool pattern shit here
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full text-center items-center justify-center mb-5">
          {/* Logo */}
          <div className="size-14 rounded-xl flex items-center justify-center bg-amber-400/30 mb-4 group hover:bg-amber-400/35">
            <MessagesSquare className="size-7 text-amber-800 group-hover:text-amber-900" />
          </div>
          <h1 className="text-2xl capitalize font-medium text-black tracking-wider mb-1">
            Create an account
          </h1>
          <p className="font-light text-black/60">
            Fill in the form to create your free profile
          </p>
        </div>

        {/* Sign up form */}
        <div>
          <form onSubmit={handleSubmit} className="min-w-[400px]">
            {/* Full name input */}
            <div className="mb-3">
              <label htmlFor="full-name">
                <span className="text-xs font-medium">Full Name</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="text"
                  id="full-name"
                  placeholder="John Doe"
                  className="w-full bg-slate-100 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={userInputs.fullName}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, fullName: e.target.value })
                  }
                />
                <User className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
              </div>
            </div>

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
                  className="w-full bg-slate-100 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={userInputs.username}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, username: e.target.value })
                  }
                />
                <UserCheck className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
              </div>
            </div>

            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="email">
                <span className="text-xs font-medium">Email Address</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@email.com"
                  className="w-full bg-slate-100 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={userInputs.email}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, email: e.target.value })
                  }
                />
                <Mail className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
              </div>
            </div>

            {/* Password input */}
            <div className="mb-3">
              <label htmlFor="password">
                <span className="text-xs font-medium">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••••••"
                  className="w-full bg-slate-100 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={userInputs.password}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, password: e.target.value })
                  }
                />
                <Lock className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
              </div>
            </div>

            {/* Confirm password input */}
            <div className="mb-3">
              <label htmlFor="confirm-password">
                <span className="text-xs font-medium">Confirm Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••••••"
                  className="w-full bg-slate-100 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={userInputs.confirmPassword}
                  onChange={(e) =>
                    setUserInputs({
                      ...userInputs,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <ShieldCheck className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
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
                <span className="text-xs font-medium">Age</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type="number"
                  min="10"
                  max="120"
                  id="age"
                  placeholder="25"
                  className="w-[20%] bg-slate-100 border border-black/25 rounded-[4px] h-10 pl-10 placeholder:text-black/60 peer focus:outline-none focus:border-black/40"
                  value={userInputs.age}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, age: e.target.value })
                  }
                />
                <ArrowUpDown className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus:text-black/70" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
