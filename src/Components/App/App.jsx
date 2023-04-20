import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Posts, Users, Home, UserDetails, PostsDetails } from '../../pages';
import '../../index.css';
import Header from '../Header/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts">
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostsDetails />} />
        </Route>
        <Route path="/users">
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
