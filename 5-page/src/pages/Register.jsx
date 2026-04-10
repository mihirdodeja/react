import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.warning("Please fill all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.warning("Password must be at least 6 characters");
      return;
    }
    
    const success = register(name, email, password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold">Create account</h3>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Your name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="First and last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="form-text"><i className="bi bi-info-circle text-primary"></i> Passwords must be at least 6 characters.</div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Re-enter password</label>
              <input 
                type="password" 
                className="form-control" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-amazon btn-lg w-100 rounded-1 mb-3 shadow-sm">
              Continue
            </button>

            <p className="small text-muted mb-4 pb-3 border-bottom">
              By creating an account, you agree to ShopZon's Conditions of Use and Privacy Notice.
            </p>
            
            <p className="mb-0 text-center">
              Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Sign in <i className="bi bi-caret-right-fill"></i></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
