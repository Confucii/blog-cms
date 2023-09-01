import "./styles/Home.css";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

function Home() {
  const axios = useAxios();
  useAuth();

  async function testCookies() {
    try {
      await axios.post(
        "http://localhost:3000/posts",
        { title: "Test post", text: "Test text", posted: false },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Link to={"form"}>Form</Link>
      <button onClick={testCookies}>Test</button>
    </>
  );
}

export default Home;
