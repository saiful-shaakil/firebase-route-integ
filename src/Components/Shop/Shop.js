import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";

const auth = getAuth(app);

const Shop = () => {
  const [user] = useAuthState(auth);
  return (
    <div>{user ? <p>You are {user?.displayName}</p> : <p>Log In First</p>}</div>
  );
};

export default Shop;
