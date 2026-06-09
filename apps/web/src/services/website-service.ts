import axios from 'axios';

const WEB_GEN_API_URL = process.env.NEXT_PUBLIC_WEB_GEN_API_URL || 'http://localhost:3004';

function getAuthHeaders() {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export interface GenerateWebsiteParams {
  description: string;
  template: string;
  framework: string;
  onProgress?: (progress: number) => void;
}

export interface WebsiteJobStatus {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  url?: string | null;
  code?: string | null;
  error?: string | null;
}

export async function generateWebsite({ description, template, framework, onProgress }: GenerateWebsiteParams): Promise<{ code: string, previewUrl: string }> {
  // 1. Lancer la génération
  const response = await axios.post(
    `${WEB_GEN_API_URL}/web/generate`,
    { prompt: description, siteConfig: { template, framework } },
    { headers: { 'Content-Type': 'application/json', ...getAuthHeaders() } }
  );

  const { jobId } = response.data;

  // 2. Polling du statut
  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const statusRes = await axios.get(`${WEB_GEN_API_URL}/web/status/${jobId}`, {
          headers: { ...getAuthHeaders() }
        });
        
        const status: WebsiteJobStatus = statusRes.data;

        if (onProgress && status.progress) {
          onProgress(status.progress);
        }

        if (status.status === 'completed' && status.url && status.code) {
          resolve({
            code: status.code,
            previewUrl: status.url
          });
        } else if (status.status === 'failed') {
          reject(new Error(status.error || 'La génération du site a échoué'));
        } else {
          setTimeout(poll, 3000); // Poll toutes les 3 secondes
        }
      } catch (error) {
        reject(error);
      }
    };
    poll();
  });
}
