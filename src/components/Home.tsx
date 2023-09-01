import axios from "axios";
import "./styles/Home.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Home() {
  const navigator = useNavigate();
  useAuth();

  async function testCookies() {
    try {
      await axios.post(
        "http://localhost:3000/posts",
        { title: "Test post", text: "Test text", posted: false },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function testLogout() {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigator("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Link to={"form"}>Form</Link>
      <button onClick={testCookies}>Test</button>
      <button onClick={testLogout}>Logout</button>
    </>
  );
}

export default Home;
