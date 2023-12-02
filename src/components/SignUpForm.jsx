import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSignUp } from "../hooks/useSignUp";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-black text-white border-2 h-5/6 w-2/6"
    >
      <header className="text-center p-3 font-bold text-xl text-yellow-500">
        <h1>Get Started Now</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 mt-12"
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
      </form>
      <div className="text-center m-8">OR</div>
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
