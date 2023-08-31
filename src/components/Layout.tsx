import "./styles/Layout.css";
import Header from "./Header/Header";
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../contexts/AuthContext";

function Layout() {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.dispatch({ type: "checkAuthStatus" });
  }, []);

  return (
    <div className="Main">
      <Header />
      <PrivateRoute auth={context.user}>
        <Outlet />
      </PrivateRoute>
    </div>
  );
}

export default Layout;
