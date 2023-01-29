import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";

import TimeAgo from "./TimeAgo";

import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <article
      id={post.id}
      key={post.id}
      className="d-flex justify-content-center align-items-start card w-auto h-auto p-5 m-4 bg-black text-light bg-opacity-75"
    >
      <h3 className="mb-3">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionButtons post={post} />
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
