import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, setModal }) => {
  return (
    <section className="bg-black w-screen h-screen absolute top-0 left-0">
      <header className="flex justify-end text-3xl m-5 text-red-500">
        <FaTimes onClick={() => setModal(false)} />
      </header>
      <div className="flex w-3/6 h-3/6 bg-gray-700/10 mx-auto p-4 items-center justify-center rounded">{children}</div>
    </section>
  );
};

export default Modal;
