import { z } from 'zod';

// Schéma de validation pour l'inscription
export const registerSchema = z.object({
  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('Format d\'email invalide'),
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
    .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
    .regex(/[^A-Za-z0-9]/, 'Le mot de passe doit contenir au moins un caractère spécial'),
  confirmPassword: z.string().min(1, 'La confirmation du mot de passe est requise'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
});

// Schéma de validation pour la connexion
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('Format d\'email invalide'),
  password: z
    .string()
    .min(1, 'Le mot de passe est requis'),
});

// Schéma de validation pour la génération d'images
export const imageGenerationSchema = z.object({
  prompt: z
    .string()
    .min(10, 'Le prompt doit contenir au moins 10 caractères')
    .max(1000, 'Le prompt ne peut pas dépasser 1000 caractères'),
  style: z.string().optional(),
  size: z.enum(['512x512', '768x512', '512x768', '1024x1024']),
});

// Schéma de validation pour la génération de vidéos
export const videoGenerationSchema = z.object({
  prompt: z
    .string()
    .min(10, 'Le prompt doit contenir au moins 10 caractères')
    .max(1000, 'Le prompt ne peut pas dépasser 1000 caractères'),
  duration: z.enum(['15', '30', '60']).default('30'),
  style: z.string().optional(),
});

// Types dérivés des schémas
export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ImageGenerationFormData = z.infer<typeof imageGenerationSchema>;
export type VideoGenerationFormData = z.infer<typeof videoGenerationSchema>;

// Fonction utilitaire pour valider les données
export function validateForm<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
} {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((err) => {
        if (err.path.length > 0) {
          errors[err.path[0] as string] = err.message;
        }
      });
      return { success: false, errors };
    }
    return { success: false, errors: { general: 'Erreur de validation' } };
  }
}