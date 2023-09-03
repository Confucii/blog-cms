import "./styles/Home.css";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { PostData } from "../../interfaces";
import PostPreview from "./PostPreview";
import DeleteModal from "../Modals/DeleteModal";

function Home() {
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: "" });
  const loaderResponse = useLoaderData() as { data: PostData[] };
  const allPosts = loaderResponse.data;

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
        {allPosts.length > 0
          ? allPosts.map((post) => {
              return (
                <PostPreview
                  key={post._id}
                  post={post}
                  setDeleteModal={setDeleteModal}
                />
              );
            })
          : "There are no posts yet"}
      </div>
    </div>
  );
}

export default Home;
