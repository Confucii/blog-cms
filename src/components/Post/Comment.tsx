import { CommentInterface } from "../../interfaces";
import "./styles/Comment.css";
import React from "react";

function Comment({
  comment,
  setDeleteModal,
}: {
  comment: CommentInterface;
  setDeleteModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      id: string;
    }>
  >;
}) {
  return (
    <div className="Comment">
      <div className="comment-header">
        <p className="comment-name">
          <strong>{comment.author}</strong>
        </p>
        <span className="comment-dot">•</span>
        <p className="comment-date">{comment.date}</p>
      </div>
      <p className="comment-content">{comment.text}</p>
      <button
        className="btn-submit btn-delete"
        onClick={() => setDeleteModal({ isOpen: true, id: comment._id })}
      >
        Delete
      </button>
    </div>
  );
}

export default Comment;
