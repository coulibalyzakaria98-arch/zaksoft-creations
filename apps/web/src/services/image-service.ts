// apps/web/src/services/image-service.ts
import * as designApi from './designApi';

export async function generateImage({ prompt, resolution }: { prompt: string, resolution: string }): Promise<string> {
  // Use our backend API which uses BullMQ and Replicate securely
  const { jobId } = await designApi.generateImage(prompt, { 
    width: parseInt(resolution.split('x')[0]), 
    height: parseInt(resolution.split('x')[1]) 
  });
  
  // Polling logic for our backend status
  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const status = await designApi.getImageStatus(jobId);
        if (status.status === 'completed' && status.url) {
          resolve(status.url);
        } else if (status.status === 'failed') {
          reject(new Error(status.error || 'Generation failed'));
        } else {
          setTimeout(poll, 2000); // Poll every 2 seconds
        }
      } catch (error) {
        reject(error);
      }
    };
    poll();
  });
}
