import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const SignOut = () => {
  const { handleSignOut } = useFirebase();
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
