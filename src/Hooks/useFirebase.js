import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  prodErrorMap,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user, error, handleSignOut, signInWithGoogle };
};
export default useFirebase;
