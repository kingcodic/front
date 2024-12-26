// frontend/src/utils/api.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication APIs
export interface AuthPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends AuthPayload {
  username: string;
}

export const login = (data: AuthPayload) => api.post('/login', data);
export const register = (data: RegisterPayload) => api.post('/register', data);
export const fetchUser = () => api.get('/user');

// Manga APIs
export interface MangaPayload {
  title: string;
  description: string;
  author: string;
  image: string;
}

export const fetchManga = (id: string) => api.get(`/manga/${id}`);
export const createManga = (data: MangaPayload) => api.post('/manga', data);
export const updateManga = (id: string, data: MangaPayload) => api.patch(`/manga/${id}`, data);
export const deleteManga = (id: string) => api.delete(`/manga/${id}`);

// Notification APIs
export const fetchNotifications = () => api.get('/notifications');
export const markNotificationAsRead = (id: string) => api.patch(`/notifications/${id}`, { read: true });
