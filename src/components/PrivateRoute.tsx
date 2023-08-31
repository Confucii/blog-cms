import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({
  auth,
  children,
}: {
  auth: boolean;
  children: ReactElement;
}) {
  return auth ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;
