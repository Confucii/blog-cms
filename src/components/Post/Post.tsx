import { useLoaderData } from "react-router-dom";
import "./styles/Post.css";
import React, { useState } from "react";
import { PostWithComments } from "../../interfaces";
import Comments from "./Comments";
import DeleteModal from "../Modals/DeleteModal";
import useAuth from "../../hooks/useAuth";

function Post() {
  const { post, comments } = useLoaderData() as PostWithComments;
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: "" });
  useAuth();

  return (
    <div className="Post">
      {deleteModal.isOpen && (
        <DeleteModal id={deleteModal.id} setDeleteModal={setDeleteModal} />
      )}
      <div className="post-container">
        <div
          className="post-color-holder"
          style={{
            background: `linear-gradient(${post.deg}deg, rgba(${post.colors[0]},${post.colors[1]},${post.colors[2]},1) 0%, rgba(${post.colors[1]},${post.colors[2]},${post.colors[0]},1) 100%)`,
          }}
        ></div>
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-date graytext">{post.date}</p>
          <p className="post-text">{post.text}</p>
        </div>
      </div>
      <Comments comments={comments} setDeleteModal={setDeleteModal} />
    </div>
  );
}

export default Post;
