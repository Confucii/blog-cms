import { Link } from "react-router-dom";
import "./styles/PostForm.css";
import React from "react";
import useAuth from "../../hooks/useAuth";

function PostForm() {
  useAuth();

  return (
    <>
      <Link to={"/"}>Home</Link>
    </>
  );
}

export default PostForm;
