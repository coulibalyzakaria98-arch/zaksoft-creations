import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

// Métriques personnalisées
const videoDuration = new Trend('video_generation_duration');
const errorRate = new Rate('video_errors');
const successCounter = new Counter('video_successes');

// Configuration des seuils
export const options = {
  stages: [
    { duration: '1m', target: 10 },  // Ramp-up
    { duration: '3m', target: 50 },  // Pic de charge
    { duration: '1m', target: 100 }, // Spike
    { duration: '2m', target: 100 }, // Maintien
    { duration: '1m', target: 0 }    // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<5000'], // 95% des requêtes < 5s
    video_generation_duration: ['p(95)<120000'], // 95% des générations < 2min
    video_errors: ['rate<0.05'], // < 5% d'erreurs
    http_req_failed: ['rate<0.01']
  }
};

// Données de test
const prompts = [
  "A cat walking on grass in slow motion",
  "Cinematic drone shot over mountains at sunset",
  "Fast-paced gaming montage with neon effects",
  "Educational animation explaining how AI works",
  "Product commercial for a smartwatch, rotating shot",
  "TikTok dance trend with energetic transitions",
  "Nature documentary style: birds flying over ocean",
  "Abstract artistic animation with morphing shapes"
];

export default function () {
  // Simulation d'utilisateur authentifié (Simplified for k6)
  const token = "mock-token"; 
  
  // Génération vidéo
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  const userTier = ['free', 'premium'][Math.floor(Math.random() * 2)];
  
  const startTime = Date.now();
  
  const generateRes = http.post(
    'http://localhost:3002/video/generate',
    JSON.stringify({
      prompt: prompt,
      duration: 5,
      tier: userTier
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  );
  
  check(generateRes, {
    'generate status 202': (r) => r.status === 202,
    'has jobId': (r) => r.json().jobId !== undefined
  }) || errorRate.add(1);
  
  if (generateRes.status === 202) {
    const { jobId } = generateRes.json();
    
    // Polling du statut
    let status = 'pending';
    let attempts = 0;
    const maxAttempts = 60; // 2 minutes max
    
    while (status !== 'completed' && attempts < maxAttempts) {
      sleep(2); // Attendre 2 secondes
      attempts++;
      
      const statusRes = http.get(
        `http://localhost:3002/video/status/${jobId}`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );
      
      if (statusRes.status === 200) {
        const data = statusRes.json();
        status = data.status;
        
        if (status === 'completed') {
          const duration = Date.now() - startTime;
          videoDuration.add(duration);
          successCounter.add(1);
          
          check(data, {
            'has video url': (d) => d.url !== undefined && d.url !== ''
          });
        }
      }
    }
  }
}
