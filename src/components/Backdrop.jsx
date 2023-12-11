import React from "react";

const Backdrop = ({ children, close }) => {
  return (
    <div
      onClick={close}
      className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Backdrop;
