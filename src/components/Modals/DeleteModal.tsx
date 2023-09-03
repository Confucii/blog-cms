import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import "./styles/DeleteModal.css";
import React from "react";

function DeleteModal({
  id,
  setDeleteModal,
  isPost = false,
}: {
  id: string;
  setDeleteModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      id: string;
    }>
  >;
  isPost: boolean;
}) {
  const navigator = useNavigate();
  const axios = useAxios();
  function handleClose() {
    setDeleteModal({ isOpen: false, id: "" });
  }

  function handleModalClick(e) {
    e.stopPropagation();
  }

  async function handleDelete() {
    handleClose();
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch (error) {
      console.log(error);
    }
    navigator(0);
  }

  return (
    <div className="Modal" onClick={handleClose}>
      <div className="delete-modal" onClick={handleModalClick}>
        <h2>
          Are you sure that you want to delete this{" "}
          {isPost ? "post" : "comment"}?
        </h2>
        <div className="modal-controls">
          <button className="btn-delete btn-submit" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn-submit" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
