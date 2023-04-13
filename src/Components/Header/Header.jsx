import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="dec">
        <h1>Here is logo</h1>
        <Link to='/'>Home</Link>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
        <a href="/">News</a>
      </div>
    </header>
  );
};

export default Header;
