import "./styles/Home.css";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PostData } from "../../interfaces";
import PostPreview from "./PostPreview";
import DeleteModal from "../Modals/DeleteModal";

function Home() {
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: "" });
  const loaderResponse = useLoaderData() as { data: PostData[] };
  const allPosts = loaderResponse.data;
  const navigate = useNavigate();

  useAuth();

  return (
    <div className="Home">
      {deleteModal.isOpen && (
        <DeleteModal
          id={deleteModal.id}
          setDeleteModal={setDeleteModal}
          isPost={true}
        />
      )}
      <div className="posts-container">
        <button
          type="button"
          className="new-post-button"
          onClick={() => navigate("/post/new")}
        >
          New post
        </button>
        {allPosts.length > 0 &&
          allPosts.map((post) => {
            return (
              <PostPreview
                key={post._id}
                post={post}
                setDeleteModal={setDeleteModal}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
