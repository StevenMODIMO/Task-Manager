import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).":
            setError("invalid-email");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            setError("email-already-in-use");
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            setError("weak-password");
          default:
            return error.message;
        }
      });
  };

  return { signup, error, setError };
};
