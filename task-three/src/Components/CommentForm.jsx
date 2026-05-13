import { useEffect, useState } from "react";

function CommentForm({
  addComment,
  editComment,
  updateComment,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editComment) {
      setName(editComment.name);
      setEmail(editComment.email);
      setBody(editComment.body);
    }
  }, [editComment]);

  const handleSubmit = () => {
    if (!name || !email || !body) {
      alert("Please fill all fields");
      return;
    }

    if (editComment) {
      updateComment({
        id: editComment.id,
        name,
        email,
        body,
      });
    } else {
      addComment({
        name,
        email,
        body,
      });
    }

    setName("");
    setEmail("");
    setBody("");
  };

  return (
    <div className="form-card">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Write Comment..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editComment ? "Update Comment" : "Add Comment"}
      </button>
    </div>
  );
}

export default CommentForm;