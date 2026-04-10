import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = ({ onSearch }) => {
  const { user, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-amazon navbar-dark sticky-top shadow-sm py-2">
      <div className="container-fluid px-3 px-md-4">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
          <i className="bi bi-cart4 text-amazon-yellow me-2 fs-3"></i>
          <span>Shop<span className="text-amazon-yellow">Zon</span></span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <form className="d-flex flex-grow-1 mx-lg-4 my-3 my-lg-0" onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control px-3" 
                placeholder="Search products, brands and categories..." 
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="btn btn-amazon px-4" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          {/* Right Links */}
          <ul className="navbar-nav align-items-lg-center">
            {user ? (
              <li className="nav-item dropdown px-2">
                <a className="nav-link dropdown-toggle text-white p-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="d-flex flex-column lh-1">
                    <small className="text-light opacity-75">Hello, {user.name.split(' ')[0]}</small>
                    <span className="fw-bold fs-6">Account & Lists</span>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="navbarDropdown">
                  <li><h6 className="dropdown-header">My Account</h6></li>
                  <li><hr className="dropdown-divider" /></li>
                  {/* Admin link */}
                  <li><Link className="dropdown-item" to="/admin">Admin Panel (CRUD)</Link></li>
                  <li><button className="dropdown-item text-danger" onClick={handleLogout}>Sign Out</button></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item px-2 my-2 my-lg-0">
                <Link to="/login" className="nav-link text-white p-0">
                  <div className="d-flex flex-column lh-1">
                    <small className="text-light opacity-75">Hello, sign in</small>
                    <span className="fw-bold fs-6">Account & Lists</span>
                  </div>
                </Link>
              </li>
            )}

            <li className="nav-item px-2 mt-3 mt-lg-0">
              <Link to="/cart" className="nav-link d-flex align-items-center text-white position-relative">
                <i className="bi bi-cart3 fs-3"></i>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-amazon text-amazon-yellow fw-bold" style={{ marginLeft: '10px' }}>
                  {cartCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
                <span className="fw-bold ms-2 mt-2 d-none d-lg-block">Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
