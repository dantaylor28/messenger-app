import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import useSignup from "../hooks/useSignup";
import signupImg from "../assets/signup-img.jpg";
import { TfiThemifyFavicon } from "react-icons/tfi";

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
    //             value={userInputs.fullName}
    //             onChange={(e) =>
    //               setUserInputs({ ...userInputs, fullName: e.target.value })
    //             }
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

    //       <GenderCheckbox
    //         onCheckboxChange={handleCheckboxChange}
    //         selectedGender={userInputs.gender}
    //       />

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

      {/* Right side - Sign up form */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full text-center items-center justify-center">
          {/* Logo */}
          <div className="size-12 rounded-xl flex items-center justify-center bg-slate-800/10 mb-4">
            <TfiThemifyFavicon className="size-6" />
          </div>
          <h1 className="text-2xl capitalize font-medium text-black tracking-wider">Create an account</h1>
          <p className="">Fill in the form to create your free profile</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
