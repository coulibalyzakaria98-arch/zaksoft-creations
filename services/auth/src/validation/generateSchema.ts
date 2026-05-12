import { z } from 'zod';

const generateSchema = z.object({
  prompt: z.string().min(3).max(500),
  size: z.enum(['512x512', '1024x1024', '4k']).default('1024x1024'),
});

export { generateSchema };
