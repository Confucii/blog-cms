import React from "react";
import "./styles/PostPreview.css";
import { useNavigate } from "react-router-dom";
import { PostData } from "../../interfaces";
import useAxios from "../../hooks/useAxios";

function PostPreview({
  post,
  setDeleteModal,
}: {
  post: PostData;
  setDeleteModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      id: string;
    }>
  >;
}) {
  const navigate = useNavigate();
  const axios = useAxios();

  function handleDelete(e) {
    e.stopPropagation();
    setDeleteModal({ isOpen: true, id: post._id });
  }

  function handleEdit(e) {
    e.stopPropagation();
    navigate(`/post/${post._id}/edit`);
  }

  async function handlePost(e) {
    e.stopPropagation();
    try {
      await axios.put(
        `http://localhost:3000/posts/${post._id}`,
        { title: post.title, text: post.text, posted: !post.posted },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

  function navigateToPost(e) {
    navigate(`/post/${post._id}`);
  }

  return (
    <div className="PostPreview" onClick={navigateToPost}>
      <div
        className="color-holder"
        style={{
          background: `linear-gradient(${post.deg}deg, rgba(${post.colors[0]},${post.colors[1]},${post.colors[2]},1) 0%, rgba(${post.colors[1]},${post.colors[2]},${post.colors[0]},1) 100%)`,
        }}
      ></div>
      <div className="post-preview-data">
        <h2 className="post-preview-title">
          {(!post.posted ? "Hidden: " : "") + post.title}
        </h2>
        <p className="post-preview-date">Posted: {post.date}</p>
        <div className="control-buttons">
          <button className="btn-post btn-submit" onClick={handlePost}>
            {post.posted ? "Hide" : "Post"}
          </button>
          <button className="btn-edit btn-submit" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn-delete btn-submit" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
