import { Outlet, Link } from "react-router"

const Sidebar = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="link">
              Create a Crewmate
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Crewmate Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Sidebar;