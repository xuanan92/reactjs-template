import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>Redux</h1>
        <nav className="header_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Post</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
