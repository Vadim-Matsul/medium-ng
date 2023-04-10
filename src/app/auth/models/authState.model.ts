import { z } from 'zod';

export const authStateModelSchema = z.object({
  isSubmitting: z.boolean(),
});
export type AuthStateModel = z.infer<typeof authStateModelSchema>;
