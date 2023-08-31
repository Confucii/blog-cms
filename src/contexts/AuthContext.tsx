import { ReactElement, createContext, useEffect, useReducer } from "react";
import React from "react";
import getCookie from "../helpers/cookieHelper";
import { AuthContextInterface } from "../interfaces";

export const AuthContext = createContext<AuthContextInterface>({
  user: false,
  dispatch: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "checkAuthStatus":
      if (getCookie("auth")) return { user: true };
    case "logout":
      return { user: false };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }: { children: ReactElement }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: getCookie("auth"),
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
