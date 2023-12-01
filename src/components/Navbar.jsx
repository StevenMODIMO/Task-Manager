import React from "react";
import { HiLogin } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = ({ setShowLogin, setShowSignUp }) => {
  return (
    <div className="bg-gray-700/10 p-4 text-white flex justify-between">
      <header className="text-2xl flex gap-2">
        <img src="/1611674.png" alt="logo" className="w-10" />
        <h1>Task Manager</h1>
        <img src="/react.svg" alt="logo" className="w-5" />
      </header>
      <ul className="flex gap-8 mr-6 p-1 font-bold cursor-pointer">
        <li className="flex gap-1" onClick={() => setShowSignUp(true)}>
          <h1>Sign Up</h1>
          <FaRegUserCircle className="text-xl text-yellow-500 font-bold mt-1" />
        </li>
        <li className="flex gap-1" onClick={() => setShowLogin(true)}>
          <h1>Login</h1>
          <HiLogin className="text-xl text-blue-500 font-bold mt-1" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
