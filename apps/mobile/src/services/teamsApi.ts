import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_TEAMS_API_URL || 'https://api.zaksoft-creations.com/teams';

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const teamsService = {
  getMyTeams: async () => {
    const response = await api.get('/teams');
    return response.data;
  },
  createTeam: async (data: { name: string; description?: string }) => {
    const response = await api.post('/teams', data);
    return response.data;
  },
  getTeam: async (teamId: string) => {
    const response = await api.get(`/teams/${teamId}`);
    return response.data;
  },
  getInvitations: async () => {
    const response = await api.get('/invitations/me');
    return response.data;
  },
  acceptInvitation: async (token: string) => {
    const response = await api.post(`/invitations/${token}/accept`);
    return response.data;
  },
  declineInvitation: async (invitationId: string) => {
    const response = await api.delete(`/invitations/${invitationId}`);
    return response.data;
  }
};
