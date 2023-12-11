import React from "react";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = ({ setShowLogin, setShowSignUp }) => {
  const user = useAuth();
  const auth = getAuth();
  const logout = async () => await signOut(auth);
  return (
    <div className="text-white flex items-center justify-between bg-gray-500/20 p-4 rounded-3xl">
      <header className="flex text-lg gap-1">
        <img src="1611674.png" alt="logo" className="w-7 bg-yellow-700 rounded" />
        <h1>Task Manager</h1>
      </header>
      <>
        {!user ? (
          <ul className="flex gap-3 text-sm sm:text-lg">
            <li className="flex gap-1 text-yellow-500" onClick={() => setShowSignUp(true)}>
              <h1>Sign Up</h1>
            </li>
            <li className="flex gap-1 text-white" onClick={() => setShowLogin(true)}>
              <h1>Login</h1>
            </li>
          </ul>
        ) : (
          <div className="text-3xl" onClick={logout}>
            <HiBars3BottomLeft />
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;