import { authenticate } from './auth';
import { limiter } from './rate-limit';
import { generateSchema } from './validation/generateSchema'; // Correction de l'importation

export { authenticate, limiter, generateSchema };
