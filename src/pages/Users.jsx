import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Users = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="users">
      {users &&
        users.map((el) => {
          return (
            <div className="user" key={el.id}>
              <span>
                {el.name} ({el.username})
               </span>
              <button onClick={()=> navigate(`/users/${el.id}`)}>More...</button>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
