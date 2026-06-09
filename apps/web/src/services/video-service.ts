// apps/web/src/services/video-service.ts
import * as videoApi from './videoApi';

export async function generateVideo({ 
  prompt, 
  duration, 
  aspectRatio, 
  onProgress 
}: { 
  prompt: string, 
  duration: number, 
  aspectRatio: string,
  onProgress?: (progress: number) => void
}): Promise<{ url: string }> {
  // Use our backend API which uses BullMQ and Runway securely
  const { jobId } = await videoApi.generateVideo(prompt, { duration, aspectRatio });
  
  // Polling logic for our backend status
  return new Promise((resolve, reject) => {
    let internalProgress = 0;
    const poll = async () => {
      try {
        const status = await videoApi.getVideoStatus(jobId);
        if (status.status === 'completed' && status.url) {
          if (onProgress) onProgress(100);
          resolve({ url: status.url });
        } else if (status.status === 'failed') {
          reject(new Error(status.error || 'Generation failed'));
        } else {
          // Progress simulation or actual backend progress if available
          if (internalProgress < 90) {
            internalProgress += 5;
            if (onProgress) onProgress(internalProgress);
          }
          setTimeout(poll, 3000); // Poll every 3 seconds for video
        }
      } catch (error) {
        reject(error);
      }
    };
    poll();
  });
}
