import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-700/10 p-4 text-white">
      <header className="text-2xl flex gap-2">
        <img src="/1611674.png" alt="logo" className="w-10" />
        <h1>Task Manager</h1>
        <img src="/react.svg" alt="logo" className="w-5" />
      </header>
    </div>
  );
};

export default Navbar;
