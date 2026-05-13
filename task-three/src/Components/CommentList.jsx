import CommentCard from "./CommentCard";

function CommentsList({
  comments,
  deleteComment,
  setEditComment,
}) {
  return (
    <div className="comments-grid">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
          setEditComment={setEditComment}
        />
      ))}
    </div>
  );
}

export default CommentsList;