// apps/web/src/services/authApi.ts
import axios from 'axios';

// Use the environment variable for the Auth API URL, default to localhost:3001
const AUTH_API_URL = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';

export interface User {
  id: string;
  email: string;
  tier: 'free' | 'basic' | 'pro';
  credits: number;
}

// Existing functions
export async function register(email: string, password: string): Promise<{ token: string; user: User }> {
  const response = await axios.post(`${AUTH_API_URL}/auth/register`, { email, password });
  return response.data;
}

export async function login(email: string, password: string): Promise<{ token: string; user: User }> {
  const response = await axios.post(`${AUTH_API_URL}/auth/login`, { email, password });
  return response.data;
}

export async function getMe(token: string): Promise<User> {
  const response = await axios.get(`${AUTH_API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

// New functions for password reset
export async function requestPasswordReset(email: string): Promise<void> {
  await axios.post(`${AUTH_API_URL}/auth/request-reset`, { email });
}

export async function resetPassword(token: string, newPassword: string): Promise<void> {
  await axios.post(`${AUTH_API_URL}/auth/reset-password`, { token, newPassword });
}
