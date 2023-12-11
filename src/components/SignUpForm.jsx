import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTimes } from "react-icons/fa";
import { useSignUp } from "../hooks/useSignUp";
import { useGoogle } from "../hooks/useGoogle";

const SignUpForm = ({close}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, setError } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="mt-10 bg-gray-500/20 rounded-3xl w-[90%] h-fit sm:w-[50%] lg:w-[40%] xl:w-[30%]"
    >
      <div
        className="flex justify-end mt-6 mr-4 text-2xl text-white"
        onClick={close}
      >
        <FaTimes />
      </div>
      <header className="text-center p-3 font-bold text-xl text-yellow-500">
        <h1>Get Started Now</h1>
      </header>
      <form
        onFocus={() => setError(null)}
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 mt-1"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border outline-none w-5/6 rounded text-black"
          placeholder="example@email.com"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="p-2 border outline-none w-5/6 rounded text-black"
          placeholder="strong password"
        />
        <button className="rounded bg-yellow-500 p-2">Create Account</button>
        {error && <div>{error}</div>}
      </form>
      <div className="text-center m-2">OR</div>
      <section className="flex flex-col items-center text-yellow-500">
        <div className="flex gap-2 text-xl p-2 bg-gray-500/10 rounded m-2">
          <FcGoogle className="mt-1" />
          <h1>Continue with Google</h1>
        </div>
        <div className="flex gap-2 text-xl p-2 bg-gray-500/10 rounded m-2">
          <FaGithub className="mt-1" />
          <h1>Continue with Github</h1>
        </div>
      </section>
    </motion.div>
  );
};

export default SignUpForm;
