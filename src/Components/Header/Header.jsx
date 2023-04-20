import { Link, useLocation, useNavigate } from "react-router-dom";

const routes = [
  {
    path: '/',
    label: 'Main',
    id: '1',
  },
  {
    path: '/posts',
    label: 'Posts',
    id: '2',
  },
  {
    path: '/users',
    label: 'Users',
    id: '3',
  },
];

const Header = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const onBackHandler = () => {
    navigation(location.state?.from )
  }
  return (
    <header>
      <div className="dec">
        <h1>Here is logo</h1>
        {
          routes.map(({path, label, id}) => {
            return (
              <Link state={{from: location.pathname}} to={path} key={id}>
                {label}
              </Link>
            )
          })
        }
      </div>
      <button onClick={onBackHandler}>Back</button>
    </header>
  );
};

export default Header;
