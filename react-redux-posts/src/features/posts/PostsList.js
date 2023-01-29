import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <article id={post.id} className="card w-auto h-auto p-5 m-4 bg-black text-light bg-opacity-75" >
      <h3 className="mb-3">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="d-flex justify-content-center align-items-center flex-column">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
