import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Le mot de passe doit faire au moins 8 caractères'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  companyName: z.string().optional(),
  companySize: z.string().optional(),
  position: z.string().optional(),
  industry: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  intendedUse: z.string().optional(),
  budget: z.string().optional(),
  howDidYouHear: z.string().optional(),
  newsletter: z.boolean().optional(),
});
