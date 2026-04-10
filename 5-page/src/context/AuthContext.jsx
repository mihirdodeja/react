import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.email === email);

    if (userExists) {
      toast.error('User already exists!');
      return false;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Automatically log in
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
    toast.success('Registration successful!');
    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      setUser(foundUser);
      toast.success(`Welcome back, ${foundUser.name}!`);
      return true;
    } else {
      toast.error('Invalid email or password.');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    toast.info('Logged out successfully.');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
