import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("No such Asshole");
    }
  });
  return { auth };
};

export { useAuth };
