import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts, authors } from "./data";

export default function() {
  const [author, setAuthor] = React.useState({});
  const [authorPosts, setAuthorPosts] = React.useState([]);
  const { slug } = useParams();

  React.useEffect(() => {
    const currentAuthor = authors.find(author => author.slug === slug);
    const currentAuthorPosts = posts.filter(post => post.author === slug);

    setAuthor(currentAuthor);
    setAuthorPosts(currentAuthorPosts);
  }, [slug]);

  return (
    <>
      <h1>Posts by: {author.name}</h1>
      <ul>
        {authorPosts.map(post => (
          <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
