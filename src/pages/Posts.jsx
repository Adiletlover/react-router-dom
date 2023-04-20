import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return <div className='posts'>
    {
      posts && posts.map((el) => {
        return (
          <div key={el.id} className='post' >
            <div>
              <h1>{el.id}</h1>
              <h2>{el.title}</h2>
              <p>{el.body}<span>...</span><a href='#' onClick={()=> navigate(`/posts/${el.id}`)}>More...</a></p>
            </div>
            <button onClick={()=> navigate(`/posts/${el.id}`)}>Details</button>
          </div>
        )
      })
    }
  </div>;
};

export default Posts;
