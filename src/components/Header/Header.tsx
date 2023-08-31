import "./styles/Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="img-container">
        <Link to="/">
          <img className="logo-img" src="/logo.svg" alt="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
