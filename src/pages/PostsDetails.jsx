import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="postDet">
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <br />
      <h3>{post.body}</h3>
    </div>
  );
};

export default PostsDetails;
