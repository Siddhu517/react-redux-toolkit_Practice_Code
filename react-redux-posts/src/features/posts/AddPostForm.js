import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="d-flex justify-content-center align-items-center flex-column mt-4">
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

        <label htmlFor="postAuthor" className="form-label">
          Author:
        </label>
        <select id="postAuthor" className="form-control" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

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
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
