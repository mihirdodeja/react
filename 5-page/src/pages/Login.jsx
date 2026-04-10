import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get('redirect') || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please enter both email and password");
      return;
    }
    
    const success = login(email, password);
    if (success) {
      navigate(redirect === 'checkout' ? '/checkout' : '/');
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <i className="bi bi-person-circle display-1 text-amazon-yellow mb-3 d-block"></i>
            <h3 className="fw-bold">Sign In</h3>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Email address</label>
              <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-bold">Password</label>
              <input 
                type="password" 
                className="form-control form-control-lg" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-amazon btn-lg w-100 rounded-1 mb-3">
              Continue
            </button>
            <p className="small text-muted mb-4 text-center">
              By continuing, you agree to ShopZon's Conditions of Use and Privacy Notice.
            </p>
          </form>

          <div className="position-relative mt-4 mb-4 text-center">
            <hr className="bg-secondary" />
            <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 small text-muted">
              New to ShopZon?
            </span>
          </div>

          <Link to="/register" className="btn btn-light border-secondary btn-lg w-100 rounded-1">
            Create your ShopZon account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
