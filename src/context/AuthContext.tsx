import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../utils/api';
import { User } from '../types'; // Import User type

// Define the AuthContext type
type AuthContextType = {
  user: User | null; // Null when no user is logged in
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Set user or clear it
};

// Create context with initial null value
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await api.get('/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); // Update user state with fetched user
      } catch (error) {
        console.error('Failed to fetch user:', error);
        localStorage.removeItem('token'); // Clear invalid token
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader">Loading...</div> {/* spinner */}
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
