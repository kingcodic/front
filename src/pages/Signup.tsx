import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api'; // Payload CMS API helper

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/users/register', formData); // Payload CMS registration endpoint
      setSuccess(true);
      setError('');
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8">Sign Up</h1>
      {success && <div className="text-green-500 text-center mb-4">Registration successful!</div>}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
