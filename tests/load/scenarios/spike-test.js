import http from 'k6/http';
import { check } from 'k6';

export const options = {
  scenarios: {
    spike: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s',
      preAllocatedVUs: 50,
      maxVUs: 500,
      stages: [
        { duration: '10s', target: 10 },   // Normal
        { duration: '30s', target: 500 },  // PIC SOUDAIN
        { duration: '1m', target: 500 },   // Maintien pic
        { duration: '30s', target: 10 },   // Retour calme
      ]
    }
  },
  thresholds: {
    http_req_duration: ['p(95)<10000'], // Tolérance plus haute pour pic
    http_req_failed: ['rate<0.05']
  }
};

export default function () {
  const res = http.get('http://localhost:3002/health');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
