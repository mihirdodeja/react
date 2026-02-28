import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand text-white" to="/">O<sup>2</sup> Gym</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/MembershipForm">
                Member Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="btn text-white ms-2" to="/register">
                Register
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header