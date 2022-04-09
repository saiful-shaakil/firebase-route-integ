import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
      <Link className="mx-1.5 text-xl" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
