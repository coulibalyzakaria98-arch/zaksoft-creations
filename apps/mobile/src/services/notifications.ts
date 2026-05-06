import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_NOTIFICATIONS_API_URL || 'http://localhost:3009';

export const notificationService = {
  async registerDevice(data: {
    userId: string;
    token: string;
    platform: 'IOS' | 'ANDROID' | 'EXPO';
    appVersion?: string;
    osVersion?: string;
    model?: string;
  }) {
    const response = await axios.post(`${API_URL}/devices/register`, data);
    return response.data;
  },

  async getNotifications(userId: string, limit: number = 50) {
    const response = await axios.get(`${API_URL}/notifications`, {
      headers: { 'x-user-id': userId },
      params: { limit }
    });
    return response.data;
  },

  async markAsRead(id: string) {
    const response = await axios.put(`${API_URL}/notifications/${id}/read`);
    return response.data;
  },

  async getUnreadCount(userId: string) {
    const response = await axios.get(`${API_URL}/notifications/unread/count`, {
      headers: { 'x-user-id': userId }
    });
    return response.data;
  }
};
