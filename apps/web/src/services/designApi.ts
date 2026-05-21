import axios from 'axios';

const DESIGN_API_URL = process.env.NEXT_PUBLIC_DESIGN_API_URL || 'http://localhost:3004';

function getAuthHeaders() {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export interface ImageJobResponse {
  jobId: string;
}

export interface ImageStatusResponse {
  status: 'pending' | 'completed' | 'failed';
  url?: string | null;
  error?: string | null;
}

export async function generateImage(prompt: string, options?: Record<string, any>): Promise<ImageJobResponse> {
  const response = await axios.post(
    `${DESIGN_API_URL}/image/generate`,
    { prompt, options },
    { headers: { 'Content-Type': 'application/json', ...getAuthHeaders() } }
  );
  return response.data;
}

export async function getImageStatus(jobId: string): Promise<ImageStatusResponse> {
  const response = await axios.get(`${DESIGN_API_URL}/image/status/${jobId}`, {
    headers: { ...getAuthHeaders() }
  });
  return response.data;
}
