import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        /**
         * Firebase: Error (auth/invalid-email).
         * Firebase: Error (auth/invalid-credential).
         */
        switch (error.message) {
          case "Firebase: Error (auth/invalid-credential).":
            setError("invalid-email-or-password");
            break;
          case "Firebase: Error (auth/invalid-email).":
            setError("invalid-email");
            break;
          default:
            return error.message;
        }
      });
  };

  return { login, error, setError };
};
