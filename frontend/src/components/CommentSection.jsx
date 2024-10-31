import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { fetchHandler } from "../utils/fetchingUtils";

const CommentSection = ({ comments: initialComments, reportId }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const handleAddComment = async (e) => {
    e.preventDefault();
    const sendingComment = newComment.trim();

    try {
      const [data, error] = await fetchHandler("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          report_id: reportId,
          text: sendingComment,
        }),
      });

      if (error) {
        console.error("Failed to add comment:", error);
      } else {
        console.log("Comment added:", data);
        setComments((prevComments) => [...prevComments, data]);
        setNewComment("");
      }
    } catch (error) {
      console.error("Error while adding comment:", error);
    }
  };

  // const handleEditComment = async (id, content) => {
  //     setComments(
  //         comments.map((comment) =>
  //             comment.id === id ? { ...comment, text: content } : comment
  //         )
  //     );
  //     setEditCommentId(null);
  //     setEditContent("");
  // };

  // const handleDeleteComment = async (id) => {
  //     setComments(comments.filter((comment) => comment.id !== id));
  // };

  return (
    <div className="comment-section">
      <h4>Comments</h4>

      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            {editCommentId === comment.id ? (
              <div>
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <button
                  onClick={() => handleEditComment(comment.id, editContent)}
                >
                  Save
                </button>
                <button onClick={() => setEditCommentId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>{comment.username}</strong>: {comment.text}
                </p>
                <p>
                  <small>{new Date(comment.created_at).toLocaleString()}</small>
                </p>
                <div className="comment-actions">
                  {/* <button onClick={() => {
                                        setEditCommentId(comment.id);
                                        setEditContent(comment.text);
                                    }}>
                                        Edit */}
                  {/* </button> */}
                  {/* <button onClick={() => handleDeleteComment(comment.id)}>
                                        Delete
                                    </button> */}
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}

      <div>
        <input
          className="new-comment"
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <AwesomeButton
          style={{
            "button-primary-color": "#3A3A3A",
            "button-primary-color-dark": "#141414",
            "button-primary-color-light": "#FBFBFB",
            "button-primary-color-hover": "#2D2D2D",
          }}
          type="primary"
          onPress={handleAddComment}
        >
          Add Comment
        </AwesomeButton>
      </div>
    </div>
  );
};

export default CommentSection;
