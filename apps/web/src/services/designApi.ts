import axios from 'axios';

const DESIGN_API_URL = process.env.NEXT_PUBLIC_DESIGN_API_URL || 'http://localhost:3004';

export interface ImageJobResponse {
  jobId: string;
}

export interface ImageStatusResponse {
  status: 'pending' | 'completed' | 'failed';
  result?: {
    url: string;
  };
}

export async function generateImage(prompt: string): Promise<ImageJobResponse> {
  const response = await axios.post(`${DESIGN_API_URL}/images`, { prompt });
  return response.data;
}

export async function getImageStatus(jobId: string): Promise<ImageStatusResponse> {
  const response = await axios.get(`${DESIGN_API_URL}/images/${jobId}`);
  return response.data;
}
