import { CommentInterface } from "../../interfaces";
import Comment from "./Comment";
import "./styles/Comments.css";
import React from "react";

function Comments({
  comments,
  setDeleteModal,
}: {
  comments: CommentInterface[];
  setDeleteModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      id: string;
    }>
  >;
}) {
  return (
    <div className="Comments">
      <h2 className="comments-header">Comments</h2>
      <div className="comments-container">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <Comment
                key={comment._id}
                comment={comment}
                setDeleteModal={setDeleteModal}
              />
            );
          })
        ) : (
          <div className="error-message">There are no comments</div>
        )}
      </div>
    </div>
  );
}

export default Comments;
