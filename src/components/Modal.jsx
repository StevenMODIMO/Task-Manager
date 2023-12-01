import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Modal = ({ children, setModal }) => {
  return (
    <motion.section
      className="bg-black w-screen h-screen absolute top-0 left-0"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className="flex justify-end text-3xl m-5 text-red-500">
        <FaTimes onClick={() => setModal(false)} />
      </header>
      <div className="flex w-3/6 h-3/6 bg-gray-700/10 mx-auto p-4 items-center justify-center rounded">
        {children}
      </div>
    </motion.section>
  );
};

export default Modal;
