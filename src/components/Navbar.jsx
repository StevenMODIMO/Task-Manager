import React from "react";
import { HiLogin, HiLogout } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ setShowLogin, setShowSignUp }) => {
  const user = useAuth();
  const auth = getAuth();
  const logout = async () => await signOut(auth);
  return (
    <div>
      <header className="flex text-xs gap-1 mt-2 sm:text-lg sm:gap-4">
        <img src="/1611674.png" alt="logo" className="w-4 h-4 sm:h-7 sm:w-7"  />
        <img src="/react.svg" alt="logo" className="w-4 h-4 sm:h-5 sm:w-5 sm:mt-1" />
      </header>
      <>
        {!user ? (
          <ul className="text-sm flex gap-3 sm:text-lg">
            <li className="flex gap-1" onClick={() => setShowSignUp(true)}>
              <h1>Sign Up</h1>
              <FaRegUserCircle className="text-sm sm:text-lg md:text-xl text-yellow-500 font-bold mt-1" />
            </li>
            <li className="flex gap-1" onClick={() => setShowLogin(true)}>
              <h1>Login</h1>
              <HiLogin className="text-sm sm:text-lg md:text-xl text-blue-500 font-bold mt-1" />
            </li>
          </ul>
        ) : (
          <ul  className="text-xs flex flex-col gap-3 sm:flex-row sm:text-lg">
            <li className="flex gap-1" onClick={logout}>
              <h1>Logout</h1>
              <HiLogout className="text-lg sm:text-xl sm:mt-1 text-red-500 font-bold md:text-xl" />
            </li>
            <li className="flex gap-1">
              <h1>{user.email}</h1>
            </li>
          </ul>
        )}
      </>
    </div>
  );
};

export default Navbar;
