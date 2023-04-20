import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css"
const UserDetails = () => {
  const {id} = useParams()
  const [ user, setUser ] = useState(null)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div style={{width: "87%", margin: "100px auto"}}>{user && JSON.stringify(user, 2, 2)}</div>
  )
}

export default UserDetails