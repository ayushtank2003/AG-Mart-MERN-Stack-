import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-monoton text-3xl hover:text-yellow-800 cursor-pointer text-center transition">
        Ayush Mart
      </div>
    </Link>
  );
};

export default Logo;
