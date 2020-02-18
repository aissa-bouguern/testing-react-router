import React from "react";
import { posts, authors } from "./data";
import { Link } from "react-router-dom";

export default function() {
  return posts.map(post => {
    return (
      <li key={post.slug}>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        <span style={{ margin: "0 5px" }}>By</span>
        <Link to={`/user/${post.author}`}>
          <small>
            {authors.find(author => author.slug === post.author).name}
          </small>
        </Link>
      </li>
    );
  });
}
