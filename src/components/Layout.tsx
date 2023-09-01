import "./styles/Layout.css";
import Header from "./Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import useAuth from "../hooks/useAuth";

function Layout() {
  const auth = useAuth();

  return (
    <div className="Main">
      <Header />
      <PrivateRoute auth={auth}>
        <Outlet />
      </PrivateRoute>
    </div>
  );
}

export default Layout;
