import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api'; // Payload CMS API helper
import { AuthContext } from '../context/AuthContext'; // Global auth state

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // Access the AuthContext
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', formData); // Login endpoint
      localStorage.setItem('token', response.data.token); // Store JWT
      setUser(response.data.user); // Update global user state
      navigate('/'); // Redirect to homepage
    } catch (err) {
      console.error(err);
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8">Log In</h1>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#148da1] text-white font-bold p-3 rounded hover:bg-[#0d7ea8] transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
