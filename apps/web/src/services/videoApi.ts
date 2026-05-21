import axios from 'axios';

const VIDEO_API_URL = process.env.NEXT_PUBLIC_VIDEO_API_URL || 'http://localhost:3002';

function getAuthHeaders() {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export interface VideoJobResponse {
  jobId: string;
}

export interface VideoStatusResponse {
  status: 'pending' | 'completed' | 'failed';
  url?: string | null;
  error?: string | null;
}

export async function generateVideo(prompt: string, options?: Record<string, any>): Promise<VideoJobResponse> {
  const response = await axios.post(
    `${VIDEO_API_URL}/video/generate`,
    { prompt, options },
    { headers: { 'Content-Type': 'application/json', ...getAuthHeaders() } }
  );
  return response.data;
}

export async function getVideoStatus(jobId: string): Promise<VideoStatusResponse> {
  const response = await axios.get(`${VIDEO_API_URL}/video/status/${jobId}`, {
    headers: { ...getAuthHeaders() }
  });
  return response.data;
}
