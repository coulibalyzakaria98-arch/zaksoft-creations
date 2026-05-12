import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes max par IP pendant la fenêtre
  message: { error: 'Trop de requêtes, veuillez réessayer plus tard' }
});
