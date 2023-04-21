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


  function getShortValue(poster) {
    const newPoster = {...poster[2]}
    if (newPoster.body && newPoster.body.length > 20) {
      newPoster.body = newPoster.body.slice(0, 20) + '...';
    }
    console.log(poster[0])
    return newPoster;
  }
  const shortObj = getShortValue(posts);
  console.log(shortObj)

  return <div className='posts'>
    {
      posts && posts.map((el) => {
        return (
          <div key={el.id} className='post' >
            <div>
              <h1>{el.id}</h1>
              <h2>{el.title}</h2>
              <p>{shortObj.body}<a href='#' onClick={()=> navigate(`/posts/${el.id}`)}>More...</a></p>
            </div>
            <button onClick={()=> navigate(`/posts/${el.id}`)}>Details</button>
          </div>
        )
      })
    }
  </div>;
};

export default Posts;
