import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div>
      <Link className="mx-1.5 text-xl" to="/">
        Home
      </Link>
      <Link className="mx-1.5 text-xl" to="/shop">
        Shop
      </Link>
      <Link className="mx-1.5 text-xl" to="/orders">
        Orders
      </Link>
      <Link className="mx-1.5 text-xl" to="/register">
        Register
      </Link>
      <span className="text-xl text-blue-600 mx-1.5">
        {" "}
        {user?.displayName && user.displayName}
      </span>
      {user?.uid ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <Link className="mx-1.5 text-xl" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
