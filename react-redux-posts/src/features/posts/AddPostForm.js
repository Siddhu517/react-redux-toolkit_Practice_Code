import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="mt-4 d-flex justify-content-center align-items-center flex-column">
      <h2>Add a New Post</h2>
      <form className="form-group">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          className="form-control"
          onChange={onTitleChanged}
        />
        <label htmlFor="postTitle" className="form-label">
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          className="form-control"
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={onSavePostClicked}
          className="btn btn-primary rounded-pill mt-4 mb-5"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
