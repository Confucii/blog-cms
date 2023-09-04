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
import Post from "./components/Post/Post";

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
      {
        path: "post/new",
        element: <PostForm isNew={true} />,
      },
      {
        path: "post/:postid",
        children: [
          {
            index: true,
            element: <Post />,
            loader: async ({ params }) => {
              return fetch(`http://localhost:3000/posts/${params.postid}`, {
                mode: "cors",
              });
            },
          },
          {
            path: "edit",
            element: <PostForm />,
            loader: async ({ params }) => {
              return fetch(`http://localhost:3000/posts/${params.postid}`, {
                mode: "cors",
              });
            },
          },
        ],
      },
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
