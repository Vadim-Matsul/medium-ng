import { z } from 'zod';

export const registerFormDataSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});
export type RegisterFormData = z.infer<typeof registerFormDataSchema>;
