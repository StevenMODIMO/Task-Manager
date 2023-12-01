import React from "react";

const Backdrop = ({ children, close }) => {
  return (
    <div
      onClick={close}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900/5"
    >
      {children}
    </div>
  );
};

export default Backdrop;
