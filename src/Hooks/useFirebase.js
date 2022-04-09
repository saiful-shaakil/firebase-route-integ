import {
  getAuth,
  GoogleAuthProvider,
  prodErrorMap,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase.init";
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { user, error, signInWithGoogle };
};
export default useFirebase;
