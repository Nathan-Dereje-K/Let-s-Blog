import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("John Doe");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogObject = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObject),
    }).then(() => {
      console.log("Added a new Blog!");
      setIsPending(false);
    });
  };
  const handleClick = () => {
    alert("Added a new Blog!");
  };
  return (
    <div className="create">
      <h2>Add a new Blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          placeholder="Title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          placeholder="Add your Blog body here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>

        <Link to = '/' >{!isPending && <button onClick={handleClick} >Add Blog</button>}</Link>
        {isPending && <button>Adding blog ....</button>}
      </form>
    </div>
  );
};

export default Create;
