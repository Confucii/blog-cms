import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import "./styles/index.css";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./contexts/AuthContext";
import PostForm from "./components/PostForm/PostForm";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return axios.get("http://localhost:3000/posts");
        },
      },
      { path: "form", element: <PostForm /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
