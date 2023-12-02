import React from "react";
import { HiLogin, HiLogout } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ setShowLogin, setShowSignUp }) => {
  const user = useAuth();
  const auth = getAuth();
  console.log(user);
  const logout = async () => await signOut(auth);
  return (
    <div className="bg-gray-700/10 p-4 text-white flex justify-between">
      <header className="text-2xl flex gap-2">
        <img src="/1611674.png" alt="logo" className="w-10" />
        <h1>Task Manager</h1>
        <img src="/react.svg" alt="logo" className="w-5" />
      </header>
      <ul className="flex gap-8 mr-6 p-1 font-bold cursor-pointer">
        {!user ? (
          <>
            <li className="flex gap-1" onClick={() => setShowSignUp(true)}>
              <h1>Sign Up</h1>
              <FaRegUserCircle className="text-xl text-yellow-500 font-bold mt-1" />
            </li>
            <li className="flex gap-1" onClick={() => setShowLogin(true)}>
              <h1>Login</h1>
              <HiLogin className="text-xl text-blue-500 font-bold mt-1" />
            </li>
          </>
        ) : (
          <>
            <li className="flex gap-1" onClick={logout}>
              <h1>Logout</h1>
              <HiLogout className="text-xl text-red-500 font-bold mt-1" />
            </li>
            <li>
              <h1>{user.email}</h1>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
