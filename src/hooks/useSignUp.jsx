import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const useSignUp = () => {
  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => console.log(error));
  };

  return { signup };
};
