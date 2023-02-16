import React from "react";

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="cart-box">
        <img
          className="cart-icon"
          src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"
          alt="cart icon"
        />
        <span className="count">{props.count}</span>
      </div>
    </div>
  );
};

export default Navbar;
