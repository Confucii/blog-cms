import axios from "axios";
import "./styles/Login.css";
import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/comments",
        form,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);

      /* if (res.status === 200) {
        setForm({
          username: "",
          text: "",
          post: postid,
        });
        setMessages({ text: "", success: resJson.message });
        navigator(".", { replace: true });
      } else {
        let errorMessages;
        resJson.forEach((error) => {
          errorMessages = { ...errorMessages, [error.path]: error.msg };
        });

        setMessages({ ...messages, ...errorMessages });
      }*/
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
