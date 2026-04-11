import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          Blog App
        </Link>

        <div className="d-flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-outline-light ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `btn btn-outline-light ${isActive ? "active" : ""}`
            }
          >
            Posts
          </NavLink>
          <NavLink to="/add" className="btn btn-light text-primary">
            Add
          </NavLink>
        </div>
      </div>
    </nav>
  );
}