import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "./data";

export default function() {
  const [post, setPost] = React.useState({});
  const { slug } = useParams();

  React.useEffect(() => {
    const current = posts.find(post => post.slug === slug);
    setPost(current);
  }, [slug]);

  return <h1>{post.title}</h1>;
}
