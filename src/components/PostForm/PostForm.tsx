import { useLoaderData, useNavigate } from "react-router-dom";
import "./styles/PostForm.css";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { PostWithComments } from "../../interfaces";
import showdown from "showdown";

const converter = new showdown.Converter();

function PostForm({ isNew = false }: { isNew?: Boolean }) {
  const [form, setForm] = useState({
    title: "",
    text: "",
  });
  const [posted, setPosted] = useState(false);
  const [messages, setMessages] = useState({ title: "", text: "" });
  const data = useLoaderData() as PostWithComments;
  useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isNew) {
      setForm({
        title: data.post.title,
        text: converter.makeMarkdown(data.post.text),
      });
      setPosted(data.post.posted);
    }
  }, []);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (isNew) {
      await axios
        .post(
          `https://blog-api-production-17b7.up.railway.app/posts`,
          { ...form, posted },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            let errorMessages = { title: "", text: "" };
            error.response.data.map((error) => {
              errorMessages = { ...errorMessages, [error.path]: error.msg };
            });
            setMessages(errorMessages);
          }
        });
    } else {
      await axios
        .put(
          `https://blog-api-production-17b7.up.railway.app/posts/${data.post._id}`,
          { ...form, posted },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            let errorMessages = { title: "", text: "" };
            error.response.data.map((error) => {
              errorMessages = { ...errorMessages, [error.path]: error.msg };
            });
            setMessages(errorMessages);
          }
        });
    }
  }

  return (
    <div className="PostForm">
      <form className="form-post" onSubmit={handleSubmit}>
        <h2 className="form-header">Write a post!</h2>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
          />
          {messages?.title.length > 0 && (
            <span style={{ color: "red" }}>{messages.title}</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="text">Text</label>
          <textarea
            className="comment-form-textarea"
            name="text"
            id="text"
            value={form.text}
            onChange={handleChange}
            rows={20}
          />
          {messages.text.length > 0 && (
            <span style={{ color: "red" }}>{messages.text}</span>
          )}
        </div>
        <div className="form-checkbox">
          <label htmlFor="posted">Post on submission</label>
          <input
            className="checkbox-style"
            type="checkbox"
            name="posted"
            id="posted"
            value="true"
            checked={posted}
            onChange={() => {
              setPosted((status) => !status);
            }}
          />
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
