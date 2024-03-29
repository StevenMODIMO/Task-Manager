import { useState } from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Backdrop from "./components/Backdrop";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const close = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const user = useAuth();

  return (
    <main className="h-screen w-screen bg-black p-3 opacity-90">
      <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
      {user && (
        <>
          <AddTask />
          <Task />
        </>
      )}
      <AnimatePresence>
        {showLogin && (
          <Backdrop close={close}>
            <LoginForm close={close} />
          </Backdrop>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSignUp && (
          <Backdrop close={close}>
            <SignUpForm close={close} />
          </Backdrop>
        )}
      </AnimatePresence>
    </main>
  );
}
