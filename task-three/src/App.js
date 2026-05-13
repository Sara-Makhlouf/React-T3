import { useEffect, useState } from "react";
import "./App.css";

import CommentForm from "./Components/CommentForm";
import CommentsList from "./Components/CommentList";

import {
  getComments,
  addCommentApi,
  updateCommentApi,
  deleteCommentApi,
} from "./Api/CommentApi";

function App() {
  const [comments, setComments] = useState([]);
  const [editComment, setEditComment] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments();
      setComments(data);
    };

    fetchComments();
  }, []);

  const addComment = async (comment) => {
    const newComment = await addCommentApi(comment);

    setComments([newComment, ...comments]);
  };

  const deleteComment = async (id) => {
    await deleteCommentApi(id);

    const filtered = comments.filter(
      (comment) => comment.id !== id
    );

    setComments(filtered);
  };

  const updateComment = async (updatedComment) => {
    const data = await updateCommentApi(
      updatedComment.id,
      updatedComment
    );

    const updated = comments.map((comment) =>
      comment.id === data.id ? data : comment
    );

    setComments(updated);
    setEditComment(null);
  };

  return (
    <div className="container">
      <h1 className="title">Display Comments</h1>

      <CommentForm
        addComment={addComment}
        editComment={editComment}
        updateComment={updateComment}
      />

      <CommentsList
        comments={comments}
        deleteComment={deleteComment}
        setEditComment={setEditComment}
      />
    </div>
  );
}

export default App;