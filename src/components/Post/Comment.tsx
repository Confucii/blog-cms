import { CommentInterface } from "../../interfaces";
import "./styles/Comment.css";
import React from "react";

function Comment({ comment }: { comment: CommentInterface }) {
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
    </div>
  );
}

export default Comment;
