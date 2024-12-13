import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/login.css';
import Header from "../components/Header";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post('/users/login', formData);
      if (response.status === 200) {
        alert('Login successful!');
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Redirect to homepage
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      {/* Header Section */}
      <header>
        <Header />
      </header>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="switch-link">
        <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
        <p><Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link></p>
      </div>
    </div>
  );
};

export default Login;
