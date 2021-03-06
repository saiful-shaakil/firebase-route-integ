import { getAuth } from "firebase/auth";
import React from "react";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  return <div>{user?.displayName}</div>;
};

export default Home;
