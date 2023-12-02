import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    if (!email || !password) {
      setError("All fields must be filled.");
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => console.log(error.error));
  };

  return { login, error, setError };
};
