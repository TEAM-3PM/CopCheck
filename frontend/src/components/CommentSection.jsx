import React, { useState } from "react";

const CommentSection = ({ comments: initialComments }) => {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState("");
    const [editCommentId, setEditCommentId] = useState(null);
    const [editContent, setEditContent] = useState("");


    const handleAddComment = async () => {
        if (newComment.trim()) {

            const createdComment = {
                id: Date.now(), // Replace with response from API
                content: newComment,
                userName: "Current User", // Fetch current user's name from context or props
                created_at: new Date().toISOString(),
            };
            setComments([...comments, createdComment]);
            setNewComment("");
        }
    };


    const handleEditComment = async (id, content) => {
        setComments(
            comments.map((comment) =>
                comment.id === id ? { ...comment, content } : comment
            )
        );
        setEditCommentId(null);
        setEditContent("");
    };

    // Delete Comment
    const handleDeleteComment = async (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

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
                                <button onClick={() => handleEditComment(comment.id, editContent)}>
                                    Save
                                </button>
                                <button onClick={() => setEditCommentId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <p>
                                    <strong>{comment.userName}</strong>: {comment.content}
                                </p>
                                <p>
                                    <small>{new Date(comment.created_at).toLocaleString()}</small>
                                </p>
                                <div className="comment-actions">
                                    <button onClick={() => {
                                        setEditCommentId(comment.id);
                                        setEditContent(comment.content);
                                    }}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteComment(comment.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}


            <div className="new-comment">
                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
        </div>
    );
};

export default CommentSection;
