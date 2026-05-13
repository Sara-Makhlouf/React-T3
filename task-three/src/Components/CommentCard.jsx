function CommentCard({
  comment,
  deleteComment,
  setEditComment,
}) {
  return (
    <div className="comment-card">
      <div className="avatar">
        {comment.name.charAt(0).toUpperCase()}
      </div>

      <h3>{comment.name}</h3>

      <p className="email">{comment.email}</p>

      <p className="body">{comment.body}</p>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => setEditComment(comment)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteComment(comment.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CommentCard;