import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.zaksoft-creations.com';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000
});

// Intercepteur pour ajouter le token
api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Service Auth
export const authService = {
  register: async (email: string, password: string) => {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
};

// Service Design
export const designService = {
  generate: async (prompt: string, size: string, negativePrompt?: string) => {
    const response = await api.post('/design/generate', { prompt, size, negativePrompt });
    return response.data;
  },
  getStatus: async (jobId: string) => {
    const response = await api.get(`/jobs/${jobId}`);
    return response.data;
  }
};

// Service Video
export const videoService = {
  generate: async (params: any) => {
    const response = await api.post('/video/generate', params);
    return response.data;
  },
  getStatus: async (jobId: string) => {
    const response = await api.get(`/jobs/${jobId}`);
    return response.data;
  }
};

// Service Web
export const webService = {
  generate: async (params: { description: string; pages: string[]; template: string }) => {
    const response = await api.post('/web/generate', params);
    return response.data;
  },
  getStatus: async (jobId: string) => {
    const response = await api.get(`/jobs/${jobId}`);
    return response.data;
  },
  deploy: async (websiteId: string) => {
    const response = await api.post(`/web/deploy/${websiteId}`);
    return response.data;
  }
};

// Service Marketplace
export const marketplaceService = {
  getTemplates: async (params: any) => {
    const response = await api.get('/marketplace/templates', { params });
    return response.data;
  },
  createTemplate: async (data: any) => {
    const response = await api.post('/marketplace/templates', data);
    return response.data;
  },
  importTemplate: async (templateId: string) => {
    const response = await api.post(`/marketplace/templates/${templateId}/import`);
    return response.data;
  },
  getMyTemplates: async () => {
    const response = await api.get('/marketplace/me/templates');
    return response.data;
  }
};
