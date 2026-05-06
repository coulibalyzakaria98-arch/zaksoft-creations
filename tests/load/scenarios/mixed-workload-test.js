import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Counter } from 'k6/metrics';

const errorRate = new Rate('errors');
const totalRequests = new Counter('total_requests');

export const options = {
  stages: [
    { duration: '2m', target: 50 },   // Montée progressive
    { duration: '5m', target: 100 },  // Charge soutenue
    { duration: '2m', target: 200 },  // Pic
    { duration: '3m', target: 100 },  // Redescente
  ],
  thresholds: {
    errors: ['rate<0.02'],
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<3000']
  }
};

const scenarios = [
  { name: 'video', weight: 4, endpoint: '/video/generate', method: 'POST' },
  { name: 'image', weight: 3, endpoint: '/image/generate', method: 'POST' },
  { name: 'website', weight: 2, endpoint: '/website/generate', method: 'POST' },
  { name: 'post', weight: 3, endpoint: '/post/generate', method: 'POST' }
];

// Test distribué selon les poids
export default function () {
  const token = "mock-token";
  const scenario = selectScenario();
  
  const payload = generatePayload(scenario);
  
  const response = http.request(
    scenario.method,
    `http://localhost:3002${scenario.endpoint}`,
    JSON.stringify(payload),
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  );
  
  totalRequests.add(1);
  
  const success = check(response, {
    [`${scenario.name} status 2xx`]: (r) => r.status >= 200 && r.status < 300
  });
  
  if (!success) errorRate.add(1);
  
  // Pause réaliste
  sleep(Math.random() * 5 + 1);
}

function selectScenario() {
  const totalWeight = scenarios.reduce((sum, s) => sum + s.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const scenario of scenarios) {
    if (random < scenario.weight) return scenario;
    random -= scenario.weight;
  }
  return scenarios[0];
}

function generatePayload(scenario) {
  switch (scenario.name) {
    case 'video':
      return { prompt: "Test video generation", duration: 5 };
    case 'image':
      return { prompt: "A beautiful landscape", size: "1024x1024" };
    case 'website':
      return { description: "Portfolio website for photographer", pages: 3 };
    case 'post':
      return { topic: "Artificial Intelligence trends", platform: "linkedin" };
    default:
      return {};
  }
}
