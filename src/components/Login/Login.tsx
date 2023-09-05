import axios from "axios";
import "./styles/Login.css";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const context = useContext(AuthContext);

  const navigator = useNavigate();

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
        "https://blog-api-production-17b7.up.railway.app/users/login",
        form,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        document.cookie = response.data.auth;
        context.dispatch({ type: "checkAuthStatus" });
        navigator("/", { replace: true });
      }
    } catch (error) {
      if (error.response.status === 400) setError(true);
    }
  }

  return context.user ? (
    <Navigate to={"/"} />
  ) : (
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
        {error && (
          <span style={{ color: "red" }}>
            Username or password is incorrect
          </span>
        )}
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
