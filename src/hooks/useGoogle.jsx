import {
  getAuth,
  GoogleAuthProvider ,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const provider = new GoogleAuthProvider ();
const auth = getAuth();

export const useGoogle = () => {
  const googelSignIn = async () => {
    await signInWithRedirect(auth, provider);
    await getRedirectResult(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return { googelSignIn}
};
