import "./styles/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

function Header() {
  const axios = useAxios();

  async function logout() {
    try {
      await axios.post("http://localhost:3000/users/logout");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="Header">
      <div className="img-container">
        <Link to="/">
          <img className="logo-img" src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <button className="btn-logout" onClick={logout}>
        Log out
      </button>
    </header>
  );
}

export default Header;
