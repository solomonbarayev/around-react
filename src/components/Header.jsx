import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header section">
      <img src={logo} alt="Around the US Logo" className="logo" />
    </header>
  );
};

export default Header;
