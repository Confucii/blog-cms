import { Link, useLoaderData } from "react-router-dom";
import "./styles/PostForm.css";
import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

function PostForm({ isNew = false }: { isNew?: Boolean }) {
  useAuth();

  return (
    <>
      <Link to={"/"}>Home</Link>
    </>
  );
}

export default PostForm;
